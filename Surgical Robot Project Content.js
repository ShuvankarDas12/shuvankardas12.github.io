
  /* ---------------------------------------------------------------------- */
  {
    id: "surgical-robot",
    title: "Medical Teleoperation Surgical Robot",
    domain: "Surgical robotics",
    organisation: "University of Leeds",
    location: "Leeds, United Kingdom",
    period: "Sep 2024 – Nov 2024",
    role: "System design",
    summary:
      "A teleoperated 6-DOF robot for Total Knee Arthroplasty, modelled in SolidWorks and designed to ISO 13485, with modular storage for more than 20 surgical tools.",
    tags: ["Teleoperation", "6-DOF", "SolidWorks", "ISO 13485", "Maxon motors"],
    specs: [
      ["Procedure", "Total Knee Arthroplasty"],
      ["Degrees of freedom", "6 (3 translational, 3 rotational)"],
      ["Structure", "Medical-grade polycarbonate"],
      ["Base / primary joints", "Maxon EC-i 52 mm"],
      ["End-effector drive", "Maxon ECX SPEED 16 mm"],
      ["Instrument storage", "20+ surgical tools, modular"],
      ["Design standard", "ISO 13485"],
      ["CAD", "SolidWorks"]
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This project is a teleoperated robotic system for Total Knee Arthroplasty (TKA). The surgeon operates the robot remotely rather than holding the instruments directly."
        ]
      },
      {
        heading: "Kinematic architecture",
        paragraphs: [
          "The robot has six degrees of freedom: three translational axes and three rotational axes. Complete system modelled in SolidWorks with a structure of medical-grade polycarbonate."
        ]
      },
      {
        heading: "Actuation",
        paragraphs: [
          "Maxon EC-i 52 mm motors drive the base and primary joints, where high torque is needed. Maxon ECX SPEED 16 mm motors drive the end-effector, where precision matters most."
        ]
      },
      {
        heading: "Compliance and the operating room",
        paragraphs: [
          "Designed the system to the ISO 13485 standard for medical devices. Modular instrument storage holds more than 20 surgical tools, which reduces set-up time in the operating room and supports management of the sterile field."
        ]
      }
    ],
    outcomes: [
      "6-DOF architecture with three translational and three rotational axes",
      "High-torque primary joints and a precision end-effector",
      "Modular storage for 20+ surgical tools",
      "Designed to ISO 13485 medical device standards"
    ],
    cover: "cover",
    gallery: [
      { file: "01", caption: "Add a caption for this image" },
      { file: "02", caption: "Add a caption for this image" },
      { file: "03", caption: "Add a caption for this image" }
    ]
  },
