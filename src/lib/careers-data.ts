export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
}

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "acoustic-transducer-lead",
    title: "Staff Acoustic Transducer & Physics Engineer",
    department: "Acoustics & Hardware",
    location: "On-site / Lab",
    type: "Full-Time",
    summary:
      "Lead the design, finite-element modeling, and micro-fabrication of next-generation high-bandwidth piezoelectric and micromachined acoustic transducer arrays.",
    responsibilities: [
      "Model acoustic propagation, impedance matching layers, and thermal dissipation using FEA simulation tools.",
      "Design multi-element phased arrays with ultra-low inter-element crosstalk and wide fractional bandwidth.",
      "Collaborate with silicon architects to optimize acoustic-to-electronic interconnects.",
      "Develop benchtop acoustic characterization test rigs and beam profiling protocols.",
    ],
    qualifications: [
      "Degree (MS/PhD preferred) in Applied Physics, Electrical Engineering, Mechanical Engineering, or Acoustics.",
      "5+ years hands-on experience designing ultrasound transducers or micro-acoustic sensors.",
      "Deep understanding of piezoelectric ceramics, single crystals, CMUT/PMUT, and matching layers.",
      "Proficiency with PZFlex, COMSOL, Field II, or MATLAB acoustic modeling tools.",
    ],
  },
  {
    id: "rf-analog-engineer",
    title: "Senior RF & Analog Front-End Engineer",
    department: "Silicon & Electronics",
    location: "Hybrid / Lab",
    type: "Full-Time",
    summary:
      "Architect ultra-low-noise analog front-ends, high-speed multichannel digitizers, and precision pulsers for high-clarity ultrasound signal acquisition.",
    responsibilities: [
      "Design low-noise preamplifiers (LNA), variable gain amplifiers (VGA), and high-dynamic-range ADCs.",
      "Optimize power-to-SNR efficiency across multichannel transceiver architectures.",
      "Manage PCB layout integrity for high-speed RF, impedance routing, and parasitic suppression.",
      "Lead silicon bring-up, EMI/EMC compliance, and signal integrity validation.",
    ],
    qualifications: [
      "BS/MS in Electrical Engineering with focus on RF, Analog, or Mixed-Signal design.",
      "4+ years experience in high-speed, low-noise analog circuit design (medical, radar, or telecom).",
      "Demonstrated track record of delivering low-noise front-ends with high dynamic range.",
      "Strong proficiency in Cadence/Altium, SPICE simulation, and high-frequency RF bench testing.",
    ],
  },
  {
    id: "dsp-beamforming-architect",
    title: "Lead DSP & Coherent Beamforming Architect",
    department: "Firmware & Algorithms",
    location: "Hybrid",
    type: "Full-Time",
    summary:
      "Design and implement real-time synthetic aperture beamforming, coherent compounding, and adaptive phase aberration correction pipelines on custom FPGAs and GPUs.",
    responsibilities: [
      "Develop mathematical architectures for real-time multi-channel delay-and-sum and minimum-variance beamforming.",
      "Implement high-throughput DSP pipelines on modern FPGAs (AMD/Xilinx UltraScale) and embedded GPUs.",
      "Optimize data streaming pipelines to sustain high-framerate imaging with sub-millisecond latencies.",
      "Co-design reconstruction algorithms closely with clinical workflow specialists.",
    ],
    qualifications: [
      "MS/PhD in Electrical Engineering, Computer Science, or Applied Mathematics.",
      "Expertise in real-time digital signal processing, spatial filtering, and phased array beamforming.",
      "Strong proficiency in C++, CUDA, OpenCL, and HDL (Verilog / VHDL / HLS).",
      "Experience with medical ultrasound, sonar, or radar beamforming pipelines.",
    ],
  },
  {
    id: "computational-imaging-scientist",
    title: "Senior Computational Imaging & Reconstruction Scientist",
    department: "Imaging & Intelligence",
    location: "Hybrid / Remote Friendly",
    type: "Full-Time",
    summary:
      "Create mathematical inverse solvers and deep computational reconstruction models to extract tissue clarity from raw channel RF data.",
    responsibilities: [
      "Formulate inverse problem algorithms to recover tissue acoustic impedance and suppress reverberation artifacts.",
      "Develop harmonic imaging, speckle reduction, and dynamic range preservation techniques.",
      "Bridge raw physical RF acoustic signals with modern learned representation pipelines.",
      "Validate reconstruction fidelity against standardized acoustic phantoms and clinical datasets.",
    ],
    qualifications: [
      "PhD or equivalent industry research experience in Computational Imaging, Computer Vision, or Medical Physics.",
      "Strong publication or patent record in acoustic imaging, inverse problems, or image reconstruction.",
      "Proficiency in Python, PyTorch, C++, and GPU-accelerated numerical computing.",
      "Passion for extracting maximum physical signal without hallucinating artificial artifacts.",
    ],
  },
  {
    id: "embedded-systems-engineer",
    title: "Embedded Systems & Low-Power Silicon Engineer",
    department: "Embedded & Systems",
    location: "Hybrid",
    type: "Full-Time",
    summary:
      "Build the low-latency embedded operating system, board support packages, and hardware abstraction layer governing our medical instrumentation.",
    responsibilities: [
      "Write high-reliability bare-metal and RTOS firmware for ARM Cortex, RISC-V, and embedded Linux platforms.",
      "Implement PCIe, USB 3.2, and high-speed DMA drivers for continuous multi-gigabit sensor streams.",
      "Architect aggressive dynamic power-management schemes to maximize battery longevity.",
      "Ensure adherence to medical safety standards (IEC 62304 / ISO 13485 firmware principles).",
    ],
    qualifications: [
      "BS/MS in Computer Engineering, Electrical Engineering, or Computer Science.",
      "3+ years experience developing embedded systems, kernel drivers, or high-throughput firmware in C/Rust.",
      "Experience with high-speed serial protocols, memory management, and hardware debugging (JTAG, logic analyzers).",
      "Proven ability to deliver fault-tolerant, safety-critical software architectures.",
    ],
  },
  {
    id: "mechanical-ergonomics-engineer",
    title: "Precision Enclosure & Ergonomics Engineer",
    department: "Mechanical & Industrial",
    location: "On-site / Lab",
    type: "Full-Time",
    summary:
      "Craft the tactile, lightweight, and thermally efficient mechanical architecture of our handheld acoustic devices and probes.",
    responsibilities: [
      "Design precision magnesium/aluminum and biocompatible polymer enclosures for clinical handheld use.",
      "Develop passive thermal dissipation architectures capable of sustaining continuous acoustic transmission without active fans.",
      "Conduct drop-testing, ingress protection (IPX7), and fatigue simulations.",
      "Collaborate with clinicians to fine-tune weight distribution, grip texture, and center of gravity.",
    ],
    qualifications: [
      "BS/MS in Mechanical Engineering, Industrial Design, or Materials Science.",
      "3+ years experience designing compact handheld consumer electronics, aerospace hardware, or medical devices.",
      "Expertise in SolidWorks/NX, FEA thermal modeling, and precision CNC/injection molding tooling.",
      "Obsessive attention to industrial design, tactile feel, and functional minimalism.",
    ],
  },
];