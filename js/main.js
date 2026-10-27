/* ==========================================================================
   SITE BEHAVIOUR
   --------------------------------------------------------------------------
   - builds the project cards from js/projects.js
   - opens the full project page when a card is selected (address ends in
     #project-<id>, so the browser Back button and shared links both work)
   - loads project images, with a placeholder when a file is not there yet
   - theme switch, mobile menu, copy buttons and the image viewer
   You should not need to edit this file to change content.
   ========================================================================== */
(function () {
  "use strict";

  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var homeView = $("#home-view");
  var projectView = $("#project-view");
  var cardsHost = $("#project-cards");
  var HOME_TITLE = document.title;
  var PLACEHOLDER_CAPTION = "Add a caption for this image";

  /* Projects marked  hidden: true  in js/projects.js are kept in the code but
     left out of the site: no card, no project page, no Previous/Next link. */
  var VISIBLE = PROJECTS.filter(function (project) { return !project.hidden; });
  var HIDDEN_IDS = PROJECTS.filter(function (project) { return project.hidden; })
    .map(function (project) { return project.id; });

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------ */
  /* Images                                                              */
  /* ------------------------------------------------------------------ */
  var TARGET_ICON =
    '<svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">' +
    '<circle cx="20" cy="20" r="9"/><path d="M20 3v34M3 20h34"/></svg>';

  function imageBase(project, file) {
    return "images/" + project.id + "/" + file;
  }

  /* Builds a picture frame. It tries each allowed extension in turn and keeps
     the placeholder if none of the files exist. */
  function createFrame(options) {
    var zoomable = !!options.zoom;
    var frame = document.createElement(zoomable ? "button" : "div");
    frame.className = "frame" + (options.className ? " " + options.className : "");
    if (zoomable) {
      frame.type = "button";
      frame.disabled = true;
      frame.setAttribute("aria-label", "Enlarge image: " + options.alt);
    }

    var hint = document.createElement("span");
    hint.className = "frame__hint";
    hint.innerHTML = TARGET_ICON +
      (SITE_CONFIG.showImageHints
        ? '<span class="label">Image slot</span><code>' + esc(options.base) + ".jpg</code>"
        : "");
    frame.appendChild(hint);

    var extensions = SITE_CONFIG.imageExtensions;
    var attempt = 0;
    var img = new Image();
    img.alt = options.alt;
    img.decoding = "async";

    var loaded = new Promise(function (resolve) {
      img.onload = function () {
        frame.classList.add("has-image");
        frame.appendChild(img);
        if (zoomable) {
          frame.disabled = false;
          frame.addEventListener("click", function () {
            openLightbox(img.src, options.caption || options.alt);
          });
        }
        resolve(true);
      };
      img.onerror = function () {
        attempt += 1;
        if (attempt < extensions.length) {
          img.src = options.base + "." + extensions[attempt];
        } else {
          resolve(false);
        }
      };
    });
    img.src = options.base + "." + extensions[0];

    return { frame: frame, loaded: loaded };
  }

  /* ------------------------------------------------------------------ */
  /* Project cards (home page)                                           */
  /* ------------------------------------------------------------------ */
  function renderCards() {
    VISIBLE.forEach(function (project) {
      var card = document.createElement("a");
      card.className = "card";
      card.href = "#project-" + project.id;

      card.appendChild(createFrame({
        base: imageBase(project, project.cover),
        alt: project.title
      }).frame);

      var tags = project.tags.slice(0, 3).map(function (tag) {
        return '<li class="tag">' + esc(tag) + "</li>";
      }).join("");

      card.insertAdjacentHTML("beforeend",
        '<div class="card__body">' +
          '<span class="label label--accent">' + esc(project.domain) + "</span>" +
          "<h3>" + esc(project.title) + "</h3>" +
          '<span class="card__org">' + esc(project.organisation) + "</span>" +
          '<p class="card__summary">' + esc(project.summary) + "</p>" +
          '<ul class="tags">' + tags + "</ul>" +
        "</div>" +
        '<div class="card__foot">' +
          '<span class="label">' + esc(project.period) + "</span>" +
          '<span class="card__more">Full project <span class="arrow" aria-hidden="true">→</span></span>' +
        "</div>");

      cardsHost.appendChild(card);
    });
  }

  /* ------------------------------------------------------------------ */
  /* Full project page                                                   */
  /* ------------------------------------------------------------------ */
  function renderProject(project) {
    var index = VISIBLE.indexOf(project);
    var previous = VISIBLE[(index - 1 + VISIBLE.length) % VISIBLE.length];
    var next = VISIBLE[(index + 1) % VISIBLE.length];

    var meta = [
      ["Organisation", project.organisation],
      ["Period", project.period],
      ["Role", project.role],
      ["Location", project.location]
    ].filter(function (row) { return row[1]; }).map(function (row) {
      return '<div class="meta__cell"><dt class="label">' + esc(row[0]) + "</dt><dd>" + esc(row[1]) + "</dd></div>";
    }).join("");

    /* A section can have paragraphs, and optionally a results table:
       table: { head: ["Column", "Column"], rows: [["value", "value"], ...] } */
    function renderTable(table) {
      var head = table.head.map(function (cell) { return '<th scope="col">' + esc(cell) + "</th>"; }).join("");
      var rows = table.rows.map(function (row) {
        return "<tr>" + row.map(function (cell, i) {
          return i === 0 ? '<th scope="row">' + esc(cell) + "</th>" : "<td>" + esc(cell) + "</td>";
        }).join("") + "</tr>";
      }).join("");
      return '<div class="table-wrap"><table class="data-table"><thead><tr>' + head + "</tr></thead><tbody>" + rows + "</tbody></table></div>";
    }

    var sections = project.sections.map(function (section) {
      var paragraphs = (section.paragraphs || []).map(function (text) {
        return "<p>" + esc(text) + "</p>";
      }).join("");
      var table = section.table ? renderTable(section.table) : "";
      return '<section class="block"><h2>' + esc(section.heading) + '</h2><div class="prose">' + paragraphs + "</div>" + table + "</section>";
    }).join("");

    var outcomes = project.outcomes.map(function (text) {
      return "<li>" + esc(text) + "</li>";
    }).join("");

    var specs = project.specs.map(function (row) {
      return '<tr><th scope="row">' + esc(row[0]) + "</th><td>" + esc(row[1]) + "</td></tr>";
    }).join("");

    var tags = project.tags.map(function (tag) {
      return '<li class="tag">' + esc(tag) + "</li>";
    }).join("");

    projectView.innerHTML =
      '<article class="project wrap">' +
        '<a class="back" href="#projects"><span class="arrow" aria-hidden="true">←</span> All projects</a>' +
        '<header class="project__head">' +
          '<span class="label label--accent">' + esc(project.domain) + "</span>" +
          "<h1>" + esc(project.title) + "</h1>" +
          '<p class="lead">' + esc(project.summary) + "</p>" +
        "</header>" +
        '<dl class="meta">' + meta + "</dl>" +
        '<div id="project-cover"></div>' +
        '<div class="project__layout">' +
          '<div class="project__main">' + sections +
            '<section class="block"><h2>Key outcomes</h2><ul class="outcomes">' + outcomes + "</ul></section>" +
          "</div>" +
          '<aside class="project__side">' +
            '<div class="spec"><div class="spec__title"><span class="label">Specification</span></div><table>' + specs + "</table></div>" +
            '<div class="side__group"><span class="label">Tools and methods</span><ul class="tags">' + tags + "</ul></div>" +
          "</aside>" +
        "</div>" +
        '<section class="gallery" id="project-gallery">' +
          '<div class="section__head"><h2>Gallery</h2><span class="label">Select an image to enlarge</span></div>' +
          '<div class="gallery__grid"></div>' +
        "</section>" +
        '<nav class="pager" aria-label="More projects">' +
          '<a class="prev" href="#project-' + esc(previous.id) + '"><span class="label">← Previous project</span><strong>' + esc(previous.title) + "</strong></a>" +
          '<a class="next" href="#project-' + esc(next.id) + '"><span class="label">Next project →</span><strong>' + esc(next.title) + "</strong></a>" +
        "</nav>" +
      "</article>";

    /* Cover image */
    $("#project-cover").appendChild(createFrame({
      base: imageBase(project, project.cover),
      alt: project.title,
      caption: project.title,
      className: "frame--cover",
      zoom: true
    }).frame);

    /* Gallery */
    var gallery = $("#project-gallery");
    var grid = $(".gallery__grid", gallery);
    var pending = (project.gallery || []).map(function (item, i) {
      var hasCaption = item.caption && item.caption !== PLACEHOLDER_CAPTION;
      var caption = hasCaption ? item.caption : "";
      var figure = document.createElement("figure");
      var result = createFrame({
        base: imageBase(project, item.file),
        alt: caption || project.title + ", image " + (i + 1),
        caption: caption || project.title,
        zoom: true
      });
      figure.appendChild(result.frame);
      if (caption || SITE_CONFIG.showImageHints) {
        var figcaption = document.createElement("figcaption");
        figcaption.textContent = caption || item.caption || "";
        figure.appendChild(figcaption);
      }
      grid.appendChild(figure);
      return result.loaded.then(function (ok) {
        if (!ok && !SITE_CONFIG.showImageHints) { figure.remove(); }
        return ok;
      });
    });

    grid.setAttribute("data-count", String(grid.children.length));

    Promise.all(pending).then(function (results) {
      grid.setAttribute("data-count", String(grid.children.length));
      var anyLoaded = results.some(Boolean);
      if (!pending.length || (!anyLoaded && !SITE_CONFIG.showImageHints)) { gallery.hidden = true; }
    });
  }

  function renderNotFound() {
    projectView.innerHTML =
      '<div class="wrap notfound">' +
        '<span class="label label--accent">Project not found</span>' +
        "<h1>That project does not exist</h1>" +
        '<a class="btn" href="#projects">Back to all projects</a>' +
      "</div>";
  }

  /* ------------------------------------------------------------------ */
  /* Routing: #project-<id> shows a project, anything else shows home     */
  /* ------------------------------------------------------------------ */
  function jumpTo(top) {
    try { window.scrollTo({ top: top, left: 0, behavior: "instant" }); }
    catch (error) { window.scrollTo(0, top); }
  }

  function route() {
    var hash = decodeURIComponent(location.hash.replace(/^#/, ""));
    closeMenu();

    if (hash.indexOf("project-") === 0) {
      var id = hash.slice("project-".length);
      var project = VISIBLE.filter(function (item) { return item.id === id; })[0];
      homeView.hidden = true;
      projectView.hidden = false;
      if (project) { renderProject(project); } else { renderNotFound(); }
      document.title = project ? project.title + " | Shuvankar Das" : HOME_TITLE;
      jumpTo(0);
      return;
    }

    var comingFromProject = !projectView.hidden;
    projectView.hidden = true;
    projectView.innerHTML = "";
    homeView.hidden = false;
    document.title = HOME_TITLE;

    if (comingFromProject) {
      var target = hash && hash !== "top" ? document.getElementById(hash) : null;
      jumpTo(target ? target.getBoundingClientRect().top + window.pageYOffset - 72 : 0);
    }
  }

  /* ------------------------------------------------------------------ */
  /* Theme switch                                                        */
  /* ------------------------------------------------------------------ */
  var root = document.documentElement;

  function activeTheme() {
    var chosen = root.getAttribute("data-theme");
    if (chosen === "dark" || chosen === "light") { return chosen; }
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  try {
    var saved = localStorage.getItem("sd-theme");
    if (saved === "dark" || saved === "light") { root.setAttribute("data-theme", saved); }
  } catch (error) { /* storage not available: follow the system theme */ }

  $("#theme-btn").addEventListener("click", function () {
    var nextTheme = activeTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", nextTheme);
    try { localStorage.setItem("sd-theme", nextTheme); } catch (error) { /* ignore */ }
  });

  /* ------------------------------------------------------------------ */
  /* Mobile menu                                                         */
  /* ------------------------------------------------------------------ */
  var menuButton = $("#menu-btn");
  var nav = $("#site-nav");

  function closeMenu() {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  }

  menuButton.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) { closeMenu(); }
  });

  /* ------------------------------------------------------------------ */
  /* Copy buttons                                                        */
  /* ------------------------------------------------------------------ */
  function fallbackCopy(text) {
    var field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (error) { ok = false; }
    field.remove();
    return ok;
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-copy]");
    if (!button) { return; }
    var text = button.getAttribute("data-copy");
    var done = function (ok) {
      button.textContent = ok ? "Copied" : "Select and copy";
      setTimeout(function () { button.textContent = "Copy"; }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
    } else {
      done(fallbackCopy(text));
    }
  });

  /* ------------------------------------------------------------------ */
  /* Image viewer                                                        */
  /* ------------------------------------------------------------------ */
  var lightbox = $("#lightbox");

  function openLightbox(src, caption) {
    $("#lightbox-img").src = src;
    $("#lightbox-img").alt = caption;
    $("#lightbox-caption").textContent = caption;
    if (typeof lightbox.showModal === "function") { lightbox.showModal(); }
  }

  $("#lightbox-close").addEventListener("click", function () { lightbox.close(); });
  lightbox.addEventListener("click", function (event) {
    if (event.target === lightbox) { lightbox.close(); }
  });

  /* ------------------------------------------------------------------ */
  /* Start                                                               */
  /* ------------------------------------------------------------------ */
  $("#year").textContent = new Date().getFullYear();
  /* Hide any other link on the page that points to a hidden project */
  HIDDEN_IDS.forEach(function (id) {
    Array.prototype.forEach.call(document.querySelectorAll('a[href="#project-' + id + '"]'), function (link) {
      link.hidden = true;
    });
  });
  renderCards();
  window.addEventListener("hashchange", route);
  route();
})();
