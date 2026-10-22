/**
 * =============================================================================
 * ACADEMIC PORTFOLIO CONFIGURATION - NAJIFA ANJUM
 * =============================================================================
 * This file serves as the centralized source of truth for your portfolio website.
 * Update this file to add projects, publications, skills, verified links, or CV.
 *
 * NOTE ON ACCURACY:
 * - Only verified academic and professional information should be added.
 * - Empty string fields ("") will automatically hide the corresponding link or button.
 * =============================================================================
 */

const profileData = {
  // Core Profile Information (Strictly verified)
  profile: {
    name: "Najifa Anjum",
    degree: "M.Sc. in Industrial and Production Engineering (IPE)",
    institution: "Bangladesh University of Engineering and Technology (BUET)",
    location: "Dhaka, Bangladesh",
    
    // Professional tagline
    tagline: "Aspiring AI/ML Researcher & Graduate Student in Industrial & Production Engineering",
    
    // Concise professional introduction
    intro: "Aspiring researcher interested in applying computational and mathematical methods to challenging problems. Focused on building a rigorous foundation in Machine Learning, Deep Learning, and Optimization for future doctoral research in AI/ML, EECS, and related computational fields.",
    
    // Detailed About Me narrative paragraphs
    about: [
      "I am currently pursuing my M.Sc. in Industrial and Production Engineering (IPE) at Bangladesh University of Engineering and Technology (BUET).",
      "My primary academic interest centers on the intersection of Machine Learning, Deep Learning, and Mathematical Optimization. I am motivated by the challenge of developing computational and mathematical frameworks capable of solving complex decision-making, modeling, and engineering problems.",
      "My long-term academic goal is to build a strong research profile to prepare for future Ph.D. applications in Artificial Intelligence, Machine Learning, Electrical Engineering & Computer Science (EECS), and related disciplines."
    ],

    // Optional profile photo:
    // When you have a professional photo, place it in "assets/images/profile.jpg"
    // and set photoUrl to "assets/images/profile.jpg".
    // If empty (""), a clean academic monogram avatar will be displayed automatically.
    photoUrl: ""
  },

  // Research Interests
  // Clearly distinguishes demonstrated focus areas from emerging exploratory interests
  researchInterests: [
    {
      id: "machine-learning",
      title: "Machine Learning",
      tag: "Core Focus",
      badgeClass: "badge-primary",
      description: "Foundational learning algorithms, statistical modeling, algorithmic efficiency, and computational methodologies for predictive decision-making.",
      focusAreas: ["Supervised & Unsupervised Learning", "Statistical Learning Theory", "Generalization & Complexity"],
      mathematicalTags: ["Statistical Inference", "Loss Optimization", "High-Dimensional Data", "Algorithmic Efficiency"],
      methodologicalScope: "Investigating theoretical properties, convergence behaviors, and scalable computing paradigms of foundational learning models applied to complex engineering environments."
    },
    {
      id: "deep-learning",
      title: "Deep Learning",
      tag: "Core Focus",
      badgeClass: "badge-primary",
      description: "Neural network architectures, representation learning, high-dimensional pattern recognition, and scalable computational modeling.",
      focusAreas: ["Deep Neural Architectures", "Representation Learning", "Computational Modeling"],
      mathematicalTags: ["Gradient Dynamics", "Representation Theory", "Loss Landscapes", "Feature Abstraction"],
      methodologicalScope: "Exploring how deep architectures capture nonlinear dependencies and latent structures, with an emphasis on computational robustness and generalizability."
    },
    {
      id: "optimization",
      title: "Optimization",
      tag: "Core Focus",
      badgeClass: "badge-primary",
      description: "Mathematical programming, convex and combinatorial optimization, algorithmic operations research, and computational solvers.",
      focusAreas: ["Mathematical Programming", "Combinatorial Optimization", "Operations Research"],
      mathematicalTags: ["Convex & Non-Convex Formulations", "Mixed-Integer Programming (MIP)", "Duality Theory", "Heuristic Solvers"],
      methodologicalScope: "Formulating exact and heuristic algorithms for constrained optimization problems, computational resource scheduling, and large-scale decision processes."
    },
    {
      id: "reinforcement-learning",
      title: "Reinforcement Learning",
      tag: "Area of Emerging Interest",
      badgeClass: "badge-exploratory",
      description: "Exploratory research interest in sequential decision-making, policy optimization, and learning dynamics under uncertainty.",
      focusAreas: ["Sequential Decision-Making", "Policy Optimization", "Exploratory Study"],
      mathematicalTags: ["Markov Decision Processes (MDP)", "Dynamic Programming", "Exploration-Exploitation", "Value Approximation"],
      methodologicalScope: "Academic study into multi-stage decision processes, feedback loops, and optimization of objective criteria over indefinite and episodic horizons."
    }
  ],

  // Education History
  // Initially contains ONLY verified degree and institution
  education: [
    {
      degree: "M.Sc. in Industrial and Production Engineering (IPE)",
      institution: "Bangladesh University of Engineering and Technology (BUET)",
      location: "Dhaka, Bangladesh",
      status: "In Progress (Current Degree)",
      details: "Focusing on computational methodology, mathematical optimization, and machine learning foundations."
    }
    /* Example to add previous verified degree later:
    ,
    {
      degree: "B.Sc. in [Your Field]",
      institution: "[Your University]",
      location: "[City, Country]",
      status: "Completed",
      details: "Major coursework, thesis title, etc."
    }
    */
  ],

  // Technical Skills (Categorized)
  // Per instructions: Keep empty until confirmed by the user.
  // When confirmed, add items to arrays (e.g., programming: ["Python", "C++"]).
  skills: {
    programming: [],
    machineLearning: [],
    deepLearning: [],
    optimization: [],
    dataAnalysis: [],
    researchTools: []
  },

  // Research Projects
  // Initially empty as verified in instructions.
  // Template provided below for future additions.
  projects: [
    /*
    {
      id: "project-1",
      title: "Project Title",
      shortDescription: "A concise overview of the problem and computational approach.",
      researchQuestion: "What specific hypothesis or question does this research investigate?",
      methodology: "Description of the mathematical model, neural architecture, or algorithm used.",
      datasetAndSource: "Dataset name and source (e.g., benchmark suite, open repository).",
      experimentalResults: "Empirical findings, performance benchmarks, and ablation outcomes.",
      toolsAndTechnologies: ["Python", "PyTorch", "Gurobi"],
      status: "Ongoing", // "Planned" | "Ongoing" | "Completed"
      githubUrl: "",     // Optional link to code repository
      paperReportUrl: "" // Optional link to preprint or technical report
    }
    */
  ],

  // Publications & Research Outputs
  // Initially empty. Will populate when papers/preprints are available.
  publications: [
    /*
    {
      id: "pub-1",
      type: "Conference", // "Conference" | "Journal" | "Preprint" | "Workshop" | "Technical Report"
      title: "Title of the research publication",
      authors: ["Najifa Anjum", "Co-Author Name"],
      venue: "Conference or Journal Name",
      year: "2026",
      status: "Under Review", // "Published" | "Accepted" | "Under Review" | "Preprint"
      abstract: "Brief summary of contributions...",
      doi: "",
      pdfUrl: "",
      codeUrl: ""
    }
    */
  ],

  // Professional & Academic Links
  // IMPORTANT:
  // - Empty strings ("") are automatically HIDDEN from public view.
  // - No placeholder or fake URLs are displayed.
  // - Update with real URLs when accounts or profiles are created.
  links: {
    googleScholar: "", // e.g. "https://scholar.google.com/citations?user=..."
    cvUrl: "",         // e.g. "assets/docs/Najifa_Anjum_CV.pdf" (Download button appears only when set)
    linkedIn: "",      // e.g. "https://www.linkedin.com/in/najifaanjum"
    github: "",        // e.g. "https://github.com/najifaanjum"
    orcid: "",         // e.g. "https://orcid.org/0000-0000-0000-0000"
    researchWebsite: "" // e.g. "https://najifaanjum.github.io"
  },

  // Contact Information
  // Set email when a public/academic email address is ready to be shared.
  // The contact button/display remains hidden until email is set.
  contact: {
    email: "", // e.g. "najifa.anjum@ipe.buet.ac.bd"
    office: "",
    note: "Feel free to reach out regarding academic research inquiries, discussions in AI/ML and optimization, or future Ph.D. opportunities."
  }
};

// Export for module support if imported in ES module context
if (typeof module !== "undefined" && module.exports) {
  module.exports = profileData;
}
