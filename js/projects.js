/* ==========================================================================
   PROJECT CONTENT
   --------------------------------------------------------------------------
   Everything shown on the project cards and on each full project page comes
   from this file. To change a project, edit its entry below and save.

   IMAGES
   Each project has its own folder:  images/<project id>/
     cover   -> the main picture (used on the card and at the top of the page)
     gallery -> extra pictures shown at the bottom of the project page

   Only write the file name WITHOUT the extension. The site looks for
   .jpg, .jpeg, .png and .webp automatically, so "cover" matches cover.jpg,
   cover.png and so on.
   ========================================================================== */

const SITE_CONFIG = {
  /* true  -> empty picture slots show the file path they are waiting for
     false -> empty gallery slots are hidden (set this before you go live) */
  showImageHints: true,
  imageExtensions: ["jpg", "jpeg", "png", "webp"]
};

const PROJECTS = [
  /* ---------------------------------------------------------------------- */
  {
    id: "upper-limb-exoskeleton",
    title: "Wearable Upper-Limb Exoskeleton",
    domain: "Medical device",
    organisation: "Vain Automated Systems",
    location: "Pune, India",
    period: "Jan 2026 – Oct 2026",
    role: "Product Research & Design Engineer (Internship)",
    summary:
      "An EMG-controlled upper-limb exoskeleton for therapeutic movement assistance, with a 0–130° range of motion, control latency below 100 ms and a 46% lower bill-of-materials cost.",
    tags: ["EMG control", "Feetech actuator", "ANSYS FEA", "GD&T", "Medical-grade nylon"],
    specs: [
      ["Elbow range of motion", "0–130°"],
      ["Actuator", "Feetech SM8524BL"],
      ["Control input", "EMG sensors"],
      ["Sampling rate", "1 kHz"],
      ["Control latency", "< 100 ms"],
      ["Frame material", "Medical-grade nylon"],
      ["Structure mass", "< 1.2 kg"],
      ["Validated user mass", "Up to 130 kg"],
      ["BOM cost reduction", "46% (up to £1,000)"]
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This wearable exoskeleton supports the elbow through a 0–130° range of motion and delivers intuitive, therapeutic movement assistance. Designed as a Product Research and Design Engineer at Vain Automated Systems, with the aim of making assisted upper-limb therapy practical in both clinical and home settings."
        ]
      },
      {
        heading: "Actuation and control",
        paragraphs: [
          "The joint is driven by a Feetech SM8524BL actuator and commanded by an EMG-sensor control system that reads the wearer's muscle activity. The system samples at 1 kHz and responds in under 100 ms, so the assistance follows the intended movement closely enough to feel natural to the wearer."
        ]
      },
      {
        heading: "Mechanical design",
        paragraphs: [
          "The frame is fabricated from medical-grade nylon, which keeps the complete structure below 3 kg. GD&T was appliedto the critical mounts and actuator housings so that every part fits and aligns precisely when the device is assembled."
        ]
      },
      {
        heading: "Structural validation",
        paragraphs: [
          "Validated the structure with finite element analysis in ANSYS 2024 for users of up to 130 kg. The analysis identified the failure modes of the design and guided the changes that improved its safety under dynamic loading."
        ]
      },
      {
        heading: "Cost and accessibility",
        paragraphs: [
          "Strategic material selection and design simplification reduced the bill-of-materials cost by 46%, a saving of up to £1,000. The lower cost makes the exoskeleton more accessible to clinics and to patients who need it at home."
        ]
      },
      {
        heading: "Working with clinicians",
        paragraphs: [
          "Worked cross-functionally with clinical stakeholders throughout the project and iterated the design on their therapeutic feedback, which improved the usability of the device and the outcomes for patients."
        ]
      }
    ],
    outcomes: [
      "0–130° assisted elbow range of motion",
      "Control latency below 100 ms at a 1 kHz sampling rate",
      "Complete structure under 1.2 kg",
      "46% lower bill-of-materials cost, up to £1,000 saved",
      "Structure validated in FEA for users up to 130 kg"
    ],
    cover: "cover",
    gallery: [
      { file: "01", caption: "Full SolidWorks assembly of the exoskeleton, from the upper-arm cuff through the actuated elbow joint to the forearm handle." },
      { file: "02", caption: "Electronics assembled and wired on the 3D-printed prototype, with the ST microcontroller board and XT60 power connections." },
      { file: "03", caption: "Next design iteration after topology optimisation, with material removed from low-stress regions to reduce weight." }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "ankle-exoskeleton",
    title: "Ankle Rehabilitation Exoskeleton",
    domain: "Rehabilitation robotics",
    organisation: "University of Leeds",
    location: "Leeds, United Kingdom",
    period: "Sep 2024 – Dec 2024",
    role: "Lead, end-to-end mechanical design",
    summary:
      "A tendon-driven ankle exoskeleton with three degrees of freedom, built around linear actuators and steel cable routing and refined over 4+ design iterations and 30+ test sessions.",
    tags: ["Tendon-driven", "3-DOF", "Linear actuators", "Mechanical design", "Prototyping"],
    specs: [
      ["Degrees of freedom", "3"],
      ["Actuation", "Linear actuators, steel cable"],
      ["Plantarflexion", "~40–55°"],
      ["Dorsiflexion", "10–20°"],
      ["Inversion / eversion", "~35° combined"],
      ["Design iterations", "4+"],
      ["Test sessions", "30+"],
      ["Clinical visit frequency", "−30%"]
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This project delivered an ankle exoskeleton for rehabilitation that moves the joint in three degrees of freedom: plantarflexion and dorsiflexion, inversion and eversion, and abduction and adduction. I led the mechanical design from start to finish."
        ]
      },
      {
        heading: "Mechanism",
        paragraphs: [
          "The exoskeleton is tendon-driven. Linear actuators pull steel cables that are routed to the ankle, and the cables drive each axis of movement. Actuator placement and cable routing were the core of the mechanical design work."
        ]
      },
      {
        heading: "Range of motion",
        paragraphs: [
          "The final design achieves approximately 40–55° of plantarflexion, 10–20° of dorsiflexion and around 35° of combined inversion and eversion."
        ]
      },
      {
        heading: "Iteration and testing",
        paragraphs: [
          "The design was taken through more than four iterations and over thirty test sessions. Each round of testing fed back into the next version of the mechanism, and this cycle is what brought the device to a high level of mechanical fidelity."
        ]
      },
      {
        heading: "Designed for use outside the clinic",
        paragraphs: [
          "Improved ease of use, self-calibration features and simplified maintenance procedures reduced the frequency of clinical visits by 30%."
        ]
      }
    ],
    outcomes: [
      "Three degrees of freedom at the ankle",
      "~40–55° plantarflexion and 10–20° dorsiflexion",
      "~35° combined inversion and eversion",
      "4+ design iterations and 30+ test sessions",
      "30% fewer clinical visits"
    ],
    cover: "cover",
    gallery: [
      { file: "01", caption: "Finite element mesh of the ankle exoskeleton in ANSYS, prepared for dynamic load-bearing FEA simulation." },
      { file: "02", caption: "Total deformation result in ANSYS: a maximum of 0.59 mm at the front of the footplate, used to confirm the design's structural viability." },
      { file: "03", caption: "Final SolidWorks design of the ankle exoskeleton, shown in two views, after 4+ design iterations and 30+ test sessions." }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "waterway-uav",
    title: "Autonomous UAV for Waterway Waste Removal",
    domain: "UAV systems",
    organisation: "University of Leeds",
    location: "Leeds, United Kingdom",
    period: "Sep 2024 – Nov 2024",
    role: "Design lead",
    summary:
      "A 20 kg carbon-fibre UAV with a 360° robotic arm and an 8-claw end-effector that captures floating debris, guided by a depth camera and a ROS2 autonomy stack.",
    tags: ["ROS2", "OpenCV", "Pixhawk", "Depth camera", "Carbon fibre"],
    specs: [
      ["Aircraft mass", "20 kg"],
      ["Frame", "Carbon fibre"],
      ["Motors", "6 × KDE8218XF120 brushless"],
      ["Battery", "Amprius UGE182"],
      ["Manipulator", "360° robotic arm"],
      ["End-effector", "8-claw gripper"],
      ["Debris capture width", "0.1–0.3 m"],
      ["Landing gear", "Cylindrical flotation"],
      ["Depth camera", "Orbbec Astra Mini Pro"],
      ["Autonomy", "ROS2, Pixhawk-compatible"]
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This project is an autonomous UAV that removes waste from waterways. The aircraft flies to floating debris, captures it with a robotic arm and can land on the water itself. I led the design of the system."
        ]
      },
      {
        heading: "Airframe and propulsion",
        paragraphs: [
          "The UAV has a carbon-fibre frame and a mass of 20 kg. It is powered by six KDE8218XF120 brushless motors and a high-capacity Amprius UGE182 battery. Cylindrical flotation landing gear gives the aircraft a stable platform when it lands on water."
        ]
      },
      {
        heading: "Debris capture",
        paragraphs: [
          "A robotic arm with 360° of rotation carries an 8-claw end-effector. The end-effector captures debris between 0.1 m and 0.3 m wide, which suits the varied waste found in marine environments."
        ]
      },
      {
        heading: "Vision and autonomy",
        paragraphs: [
          "An Orbbec Astra Mini Pro depth camera feeds an OpenCV vision pipeline. The pipeline provides a live visual feed, supports remote operation and allows waste to be targeted precisely. The autonomy stack is built on ROS2 with a Pixhawk-compatible flight control architecture and handles obstacle avoidance."
        ]
      }
    ],
    outcomes: [
      "20 kg carbon-fibre aircraft with six brushless motors",
      "Debris capture across widths of 0.1–0.3 m",
      "Stable water landings on flotation landing gear",
      "Live depth-camera feed for remote operation and targeting",
      "ROS2 autonomy stack with obstacle avoidance"
    ],
    cover: "cover",
    gallery: [
      { file: "01", caption: "Wireframe view of the central housing that holds the depth camera, microcontroller and lithium battery pack." },
      { file: "02", caption: "Top-view rotor layout of the hexacopter (M1–M6). Adjacent rotors spin in opposite directions so their reaction torques cancel and the aircraft holds its heading in a hover." },
      { file: "03", caption: "SolidWorks design of the 360° robotic arm and 8-claw end-effector, which picks up debris from the water for disposal." }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "welding-robot",
    title: "Autonomous Linear Welding Robot",
    domain: "Industrial automation",
    organisation: "KIIT",
    location: "Bhubaneswar, India",
    period: "Dec 2022 – Apr 2023",
    role: "Control and embedded development",
    summary:
      "An autonomous MIG welding robot for continuous and stitch welds, controlled by an Arduino MEGA with wireless IIoT monitoring through Blynk, which cut operator intervention time by about 50%.",
    tags: ["Arduino MEGA", "ESP8266", "IIoT", "Blynk", "MIG welding"],
    specs: [
      ["Welding process", "MIG"],
      ["Weld modes", "Continuous and stitch"],
      ["Main controller", "Arduino MEGA"],
      ["Wireless module", "NodeMCU ESP8266"],
      ["Cloud platform", "Blynk"],
      ["Operator intervention time", "~50% lower"]
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This project is an autonomous robot that performs linear MIG welds. It supports both continuous welding and stitch welding."
        ]
      },
      {
        heading: "Control system",
        paragraphs: [
          "Programmed the control algorithms on an Arduino MEGA. Applied embedded systems and robotic kinematics to implement the motion control, the safety interlocks and an operator-friendly interface."
        ]
      },
      {
        heading: "Wireless IIoT monitoring",
        paragraphs: [
          "A NodeMCU ESP8266 connects the robot to the Blynk cloud platform. This gives wireless IIoT control, real-time monitoring of the welding process and remote diagnostics."
        ]
      },
      {
        heading: "Result",
        paragraphs: [
          "The robot reduced operator intervention time by approximately 50%."
        ]
      }
    ],
    outcomes: [
      "Autonomous continuous and stitch MIG welding",
      "~50% less operator intervention time",
      "Real-time process monitoring and remote diagnostics over Blynk",
      "Safety interlocks and an operator-friendly interface"
    ],
    cover: "cover",
    gallery: [
      { file: "01", caption: "Full SolidWorks design of the welding robot, showing the MIG torch holder and the side supports that keep it stable during welding." },
      { file: "02", caption: "Electronics integrated with the main body, with the Arduino MEGA control system wired to the drive motors and other components." },
      { file: "03", caption: "Proof of concept: continuous and stitch welds laid down autonomously by the working robot." }
    ]
  },

  /* ---------------------------------------------------------------------- */
  {
    id: "go-kart",
    title: "IC Engine Go-Kart",
    domain: "Vehicle engineering",
    organisation: "Team Kalinga Racers, KIIT",
    location: "Bhubaneswar, India",
    period: "Jan 2021 – Dec 2024",
    role: "Lead, vehicle dynamics and mechanical design",
    summary:
      "A 127 cc Briggs & Stratton go-kart for the Indian Karting Race 2024, with an AISI 1020 chassis validated across five FEA load cases, Ackermann steering, a rear disc brake that stops from 60 km/h in 11.8 m, and live ESP32 telemetry.",
    tags: ["Vehicle dynamics", "ANSYS Mechanical", "ANSYS Fluent", "SolidWorks", "ESP32 telemetry"],
    specs: [
      ["Competition", "Indian Karting Race (IKR) 2024"],
      ["Engine", "Briggs & Stratton 127 cc, 4-stroke OHV"],
      ["Peak torque", "7.5 Nm @ 3,060 RPM"],
      ["Transmission", "CVT, 5/8 in shaft"],
      ["Chassis", "Ladder frame, 33 kg"],
      ["Tube", "AISI 1020, 25.4 mm bore × 2 mm wall"],
      ["L × W × H", "1,422 × 1,473 × 610 mm"],
      ["Wheelbase", "936.8 mm"],
      ["Steering", "Ackermann, 2.8 m design radius"],
      ["Brakes", "Single rear disc, 4:1 pedal ratio"],
      ["Stopping distance", "11.8 m from 60 km/h"],
      ["Min. chassis FoS", "1.15 (rear impact)"]
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This go-kart was designed and built by Team Kalinga Racers of KIIT, Bhubaneswar, for the Indian Karting Race (IKR) 2024. The brief was a safe, reliable and cost-effective kart that even an inexperienced driver could handle, with design priorities of safety and reliability, strength, cost, driver ergonomics and aesthetics. I led the vehicle dynamics analysis and the mechanical design.",
          "Every subsystem followed the same iterative loop: alternatives were modelled in SolidWorks, analysed in ANSYS 19, then modified and retested until the final design met its targets."
        ]
      },
      {
        heading: "Chassis, materials and ergonomics",
        paragraphs: [
          "The 33 kg ladder-frame chassis is built from AISI 1020 low-carbon steel tube with a 25.4 mm (1 in) bore and a 2 mm wall. AISI 1020 was chosen for its excellent weldability, machinability and ductility at low cost, with a yield strength of 294.7 MPa, an ultimate tensile strength of 394.7 MPa and 36.5% elongation at break.",
          "The kart measures 1,422 × 1,473 × 610 mm (L × W × H), with a 936.8 mm wheelbase and 35.6 mm of ground clearance. The cockpit is laid out around a 95th-percentile male driver in a reclined karting posture, and a bucket seat holds the driver in place through corners so the centre of mass does not shift abruptly."
        ]
      },
      {
        heading: "Structural validation",
        paragraphs: [
          "The chassis was meshed in ANSYS with 5–10 mm elements (about 187,000 nodes and 94,000 elements), with the 2 mm tube wall modelled as a thin feature, and solved with automatic time stepping of 20 initial and up to 80 substeps. Five load cases cover the crash and service loads the frame must survive. Every case returned a factor of safety above 1, so the frame stays below yield throughout."
        ],
        table: {
          head: ["Load case", "Load", "Max. deformation", "Max. stress", "Factor of safety"],
          rows: [
            ["Front impact", "5,000 N", "21.0 mm", "163.9 MPa", "1.52"],
            ["Rear impact", "5,000 N", "36.9 mm", "–", "1.15"],
            ["Side impact (side-pod mounts)", "3,000 N", "8.92 mm", "204.7 MPa", "1.22"],
            ["Vertical bending", "1,000 N", "1.50 mm", "–", "1.97"],
            ["Roll hoop", "1,000 N", "0.06 mm", "14.0 MPa", "> 15"]
          ]
        }
      },
      {
        heading: "Steering",
        paragraphs: [
          "The steering uses Ackermann geometry, so the inner front wheel turns more sharply than the outer one and the tyres do not scrub through corners. It was designed for a 2.8 m turning radius, which gives an inner-wheel steer angle of 24.4°.",
          "The stainless-steel steering knuckle was analysed with a 1 mm mesh (227,708 nodes) under a 100 N tie-rod load and returned a factor of safety of 7.8. The AISI 1020 stub axle was loaded with a quarter of the kart's gross weight, the share carried by each front wheel, and returned a factor of safety of 7.23."
        ]
      },
      {
        heading: "Powertrain",
        paragraphs: [
          "The kart is powered by a Briggs & Stratton 127 cc single-cylinder, four-stroke, air-cooled OHV engine (model 0831) with a 62 × 42 mm bore and stroke. It produces a peak torque of 7.5 Nm at 3,060 RPM, weighs 13 kg dry and uses 1.22 L of fuel per hour at full load.",
          "I integrated a continuously variable transmission (CVT) on a 5/8 in shaft. The CVT changes ratio steplessly to hold the engine at 3,000–3,500 RPM, around its peak-torque speed, as track conditions change."
        ]
      },
      {
        heading: "Braking",
        paragraphs: [
          "A single disc brake on the rear axle sits at one third of the axle length, opposite the drive sprocket, to keep the axle balanced. It uses a double-piston floating caliper with 25.4 mm pistons, a 19.05 mm master cylinder placed by the pedal, DOT 3 fluid and a 4:1 pedal ratio. The system was sized for a 150 kg kart decelerating at 1.2 g from 60 km/h, aiming to minimise weight transfer while keeping the stopping distance short.",
          "The stainless-steel disc was analysed on a shared 2 mm mesh: a steady-state thermal study with 100 °C at the pad contact and convection to still air, and a structural study with 0.2 MPa of pad pressure on both faces at 100 rad/s, coupled to a topology optimisation of the disc."
        ],
        table: {
          head: ["Parameter", "Design value"],
          rows: [
            ["Driver pedal force", "300 N"],
            ["Master cylinder force (4:1 pedal ratio)", "1,200 N"],
            ["Brake line pressure", "4.21 MPa"],
            ["Braking force (150 kg at 1.2 g)", "1,765.8 N"],
            ["Braking torque (114.6 mm mean disc diameter)", "101.2 Nm"],
            ["Stopping distance from 60 km/h", "11.8 m"]
          ]
        }
      },
      {
        heading: "Aerodynamics",
        paragraphs: [
          "The side pods and front wing were analysed in ANSYS Fluent in a virtual wind tunnel at 21 m/s, with symmetry conditions on the side, top and bottom faces of the domain. Five inflation layers resolve the boundary layer, on meshes of 5.0 million elements for the side pods and 1.1 million for the front wing. The aim was to cut drag, and so raise the kart's top speed, by giving the airflow a less obstructed path around the bodywork."
        ]
      },
      {
        heading: "Data acquisition and telemetry",
        paragraphs: [
          "The data-acquisition system records how the kart and driver perform on track. An infrared sensor on an Arduino Uno reads wheel RPM, and the code converts it to road speed (speed = π × tyre diameter × RPM / 60), shown live on a 16 × 2 I²C LCD.",
          "An MPU6050 six-axis IMU logs longitudinal, lateral and vertical accelerations, and an MLX90614 non-contact infrared sensor monitors brake temperature. An ESP32 receives the data over UART, through a voltage divider that steps the Uno's 5 V logic down to the ESP32's 3.3 V, and streams it to Google Sheets through its API for trackside analysis."
        ]
      }
    ],
    outcomes: [
      "Chassis validated in five FEA load cases, every one above a factor of safety of 1 (front impact: 1.52 at 5 kN)",
      "11.8 m stopping distance from 60 km/h at 1.2 g, with 101 Nm of braking torque",
      "CVT holding the engine at 3,000–3,500 RPM, around its 7.5 Nm peak-torque speed",
      "Ackermann steering for a 2.8 m turning radius, with knuckle and stub axle at factors of safety of 7.8 and 7.23",
      "Side-pod and front-wing CFD in ANSYS Fluent at 21 m/s",
      "Live telemetry of speed, accelerations and brake temperature to Google Sheets"
    ],
    cover: "cover",
    gallery: [
      { file: "01", caption: "ANSYS Fluent pressure field around the side pod in a virtual wind tunnel at 21 m/s, with airflow from left to right. The streamlined profile keeps the flow attached along both sides and confines separation to a compact wake at the trailing end, keeping drag low (−627 Pa to +387 Pa)." },
      { file: "02", caption: "Front-impact FEA of the AISI 1020 chassis under a 5 kN frontal load. The minimum factor of safety is 1.53, in the lower side rails that carry the load, so the frame stays below yield, while most of the structure sits above 10." },
      { file: "03", caption: "The first working prototype: the 127 cc Briggs & Stratton go-kart on its 33 kg ladder-frame chassis, built after months of simulation and design iteration refined the design for manufacture." }
    ]
  }
];
