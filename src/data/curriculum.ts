export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  skills: string[];
  prerequisites: string[];
  equipment: string[];
  videoUrl?: string;
  documentUrl?: string;
  interactiveContent?: string;
  assessment?: {
    type: 'sketch' | '3d_model' | 'presentation' | 'portfolio';
    criteria: string[];
    aiFeedback: boolean;
  };
}

export interface Term {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  objectives: string[];
  duration: string;
}

export interface Level {
  id: string;
  name: string;
  description: string;
  studentStatus: string;
  goal: string;
  theme?: string;
  terms: Term[];
  color: string;
  icon: string;
}

export const curriculum: Level[] = [
  {
    id: 'beginner',
    name: 'Beginner Level',
    description: 'Zero to One - Learn how to express',
    studentStatus: 'Freshman Year',
    goal: 'Students with no automotive design experience learn the fundamentals from scratch, including basic geometrical figures, construction techniques, lighting principles, and form intersection to create basic car architectures.',
    theme: 'Geometrical Cars',
    color: 'green',
    icon: '🟢',
    terms: [
      {
        id: 'term1',
        title: 'Car Anatomy & Basic Geometries',
        description: 'Understanding fundamental geometric principles in automotive design',
        duration: '4 weeks',
        objectives: [
          'Master basic geometric shapes and forms',
          'Understand vehicle composition as geometric elements',
          'Learn wheel placement and vehicle stance',
          'Develop silhouette capture skills'
        ],
        lessons: [
          {
            id: 'lesson1-1',
            title: 'Geometric Figures',
            description: 'Understanding basic shapes and forms in automotive design',
            duration: '2 hours',
            skills: ['Basic geometry', 'Shape recognition', 'Form understanding'],
            prerequisites: [],
            equipment: ['Pencil', 'Paper', 'Ruler'],
            videoUrl: 'https://youtube.com/embed/example1',
            assessment: {
              type: 'sketch',
              criteria: ['Geometric accuracy', 'Line quality', 'Proportion understanding'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson1-2',
            title: 'Cars and Boxes',
            description: 'Learning to see vehicles as geometric compositions',
            duration: '2.5 hours',
            skills: ['Composition', 'Geometric thinking', 'Vehicle structure'],
            prerequisites: ['lesson1-1'],
            equipment: ['Pencil', 'Paper', 'Ruler', 'Eraser'],
            videoUrl: 'https://youtube.com/embed/example2',
            assessment: {
              type: 'sketch',
              criteria: ['Composition quality', 'Geometric accuracy', 'Creative interpretation'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson1-3',
            title: 'Boxes and Wheels',
            description: 'Integrating circular elements with rectangular forms',
            duration: '2 hours',
            skills: ['Circle integration', 'Wheel placement', 'Form combination'],
            prerequisites: ['lesson1-2'],
            equipment: ['Pencil', 'Paper', 'Compass'],
            videoUrl: 'https://youtube.com/embed/example3',
            assessment: {
              type: 'sketch',
              criteria: ['Wheel accuracy', 'Integration quality', 'Proportion'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson1-4',
            title: 'Capture The Silhouette',
            description: 'Understanding vehicle profiles and side views',
            duration: '3 hours',
            skills: ['Silhouette recognition', 'Profile drawing', 'Vehicle identification'],
            prerequisites: ['lesson1-3'],
            equipment: ['Pencil', 'Paper', 'Tracing paper'],
            videoUrl: 'https://youtube.com/embed/example4',
            assessment: {
              type: 'sketch',
              criteria: ['Silhouette accuracy', 'Recognition skills', 'Drawing quality'],
              aiFeedback: true
            }
          }
        ]
      },
      {
        id: 'term2',
        title: 'Sketching Fundamentals',
        description: 'Developing core sketching skills and techniques',
        duration: '4 weeks',
        objectives: [
          'Master dynamic line quality',
          'Develop geometric design skills',
          'Build sketching confidence',
          'Understand perspective and proportions'
        ],
        lessons: [
          {
            id: 'lesson2-1',
            title: 'Dynamic Line Quality',
            description: 'Developing expressive, confident line work',
            duration: '2.5 hours',
            skills: ['Line confidence', 'Expression', 'Technique'],
            prerequisites: ['lesson1-4'],
            equipment: ['Various pencils', 'Paper', 'Sharpener'],
            videoUrl: 'https://youtube.com/embed/example5',
            assessment: {
              type: 'sketch',
              criteria: ['Line quality', 'Confidence', 'Expression'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson2-2',
            title: 'Perspective Side View',
            description: 'Mastering side view perspective drawing',
            duration: '3 hours',
            skills: ['Perspective', 'Side view', 'Technical drawing'],
            prerequisites: ['lesson2-1'],
            equipment: ['Pencil', 'Paper', 'Ruler', 'Eraser'],
            videoUrl: 'https://youtube.com/embed/example6',
            assessment: {
              type: 'sketch',
              criteria: ['Perspective accuracy', 'Technical quality', 'Proportion'],
              aiFeedback: true
            }
          }
        ]
      },
      {
        id: 'term3',
        title: 'Design Fundamentals',
        description: 'Introduction to vehicle components and basic CAD tools',
        duration: '4 weeks',
        objectives: [
          'Understand basic vehicle components',
          'Learn vehicle proportions and ergonomics',
          'Introduction to CAD tools',
          'Develop design thinking'
        ],
        lessons: [
          {
            id: 'lesson3-1',
            title: 'Basic Vehicle Components',
            description: 'Understanding automotive anatomy and key components',
            duration: '2 hours',
            skills: ['Vehicle anatomy', 'Component recognition', 'System understanding'],
            prerequisites: ['lesson2-2'],
            equipment: ['Pencil', 'Paper', 'Reference materials'],
            videoUrl: 'https://youtube.com/embed/example7',
            assessment: {
              type: 'sketch',
              criteria: ['Component accuracy', 'Understanding', 'Detail quality'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson3-2',
            title: 'Intro to CAD Tools',
            description: 'Introduction to digital design software',
            duration: '4 hours',
            skills: ['CAD basics', 'Digital modeling', 'Software navigation'],
            prerequisites: ['lesson3-1'],
            equipment: ['Computer', 'CAD software', 'Mouse'],
            videoUrl: 'https://youtube.com/embed/example8',
            assessment: {
              type: '3d_model',
              criteria: ['Software proficiency', 'Model accuracy', 'Technical skills'],
              aiFeedback: true
            }
          }
        ]
      }
    ]
  },
  {
    id: 'intermediate',
    name: 'Intermediate Level',
    description: 'Building upon fundamentals',
    studentStatus: 'Junior',
    goal: 'Improve sketching techniques, explore materials and manufacturing processes, understand ergonomics, and begin developing digital design skills.',
    color: 'yellow',
    icon: '🟡',
    terms: [
      {
        id: 'term4',
        title: 'Advanced Sketching Techniques',
        description: 'Developing professional sketching and rendering skills',
        duration: '4 weeks',
        objectives: [
          'Master dynamic sketches and storytelling',
          'Develop rendering techniques',
          'Learn design communication'
        ],
        lessons: [
          {
            id: 'lesson4-1',
            title: 'Dynamic Sketches and Storytelling',
            description: 'Creating compelling design narratives through sketches',
            duration: '3 hours',
            skills: ['Storytelling', 'Narrative design', 'Communication'],
            prerequisites: ['lesson3-2'],
            equipment: ['Pencil', 'Paper', 'Markers'],
            videoUrl: 'https://youtube.com/embed/example9',
            assessment: {
              type: 'sketch',
              criteria: ['Narrative quality', 'Communication', 'Visual impact'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson4-2',
            title: 'Rendering Techniques',
            description: 'Adding depth and realism to sketches',
            duration: '4 hours',
            skills: ['Rendering', 'Shading', 'Material representation'],
            prerequisites: ['lesson4-1'],
            equipment: ['Pencil', 'Paper', 'Markers', 'Colored pencils'],
            videoUrl: 'https://youtube.com/embed/example10',
            assessment: {
              type: 'sketch',
              criteria: ['Rendering quality', 'Material accuracy', 'Visual realism'],
              aiFeedback: true
            }
          }
        ]
      },
      {
        id: 'term5',
        title: 'Materials and Manufacturing',
        description: 'Understanding materials science and production processes',
        duration: '4 weeks',
        objectives: [
          'Learn materials used in automotive design',
          'Understand manufacturing processes',
          'Consider sustainability in design'
        ],
        lessons: [
          {
            id: 'lesson5-1',
            title: 'Materials Used in Automotive Design',
            description: 'Understanding material properties and applications',
            duration: '2.5 hours',
            skills: ['Material science', 'Property understanding', 'Application knowledge'],
            prerequisites: ['lesson4-2'],
            equipment: ['Reference materials', 'Samples'],
            videoUrl: 'https://youtube.com/embed/example11',
            assessment: {
              type: 'presentation',
              criteria: ['Knowledge depth', 'Application understanding', 'Communication'],
              aiFeedback: true
            }
          }
        ]
      },
      {
        id: 'term6',
        title: 'Human Factors and Ergonomics',
        description: 'Designing for user comfort, safety, and accessibility',
        duration: '4 weeks',
        objectives: [
          'Design for user comfort and safety',
          'Apply anthropometric data',
          'Consider accessibility in design'
        ],
        lessons: [
          {
            id: 'lesson6-1',
            title: 'Designing for User Comfort and Safety',
            description: 'Understanding human-centered design principles',
            duration: '3 hours',
            skills: ['Ergonomics', 'Human factors', 'Safety design'],
            prerequisites: ['lesson5-1'],
            equipment: ['Anthropometric data', 'Reference materials'],
            videoUrl: 'https://youtube.com/embed/example12',
            assessment: {
              type: 'sketch',
              criteria: ['Ergonomic accuracy', 'Safety consideration', 'User focus'],
              aiFeedback: true
            }
          }
        ]
      }
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Level',
    description: 'Industry-ready professionals',
    studentStatus: 'Senior',
    goal: 'Master digital and physical modeling techniques, develop professional presentation skills, and prepare for industry careers.',
    color: 'red',
    icon: '🔴',
    terms: [
      {
        id: 'term7',
        title: 'Digital Modeling and CAD',
        description: 'Mastering professional design software and 3D modeling',
        duration: '4 weeks',
        objectives: [
          'Master advanced CAD techniques',
          'Create photorealistic renderings',
          'Prepare designs for prototyping'
        ],
        lessons: [
          {
            id: 'lesson7-1',
            title: 'Advanced CAD Techniques',
            description: 'Mastering professional design software',
            duration: '6 hours',
            skills: ['Advanced CAD', 'Surface modeling', 'Technical precision'],
            prerequisites: ['lesson6-1'],
            equipment: ['Computer', 'Professional CAD software', 'Graphics tablet'],
            videoUrl: 'https://youtube.com/embed/example13',
            assessment: {
              type: '3d_model',
              criteria: ['Technical accuracy', 'Surface quality', 'Professional standards'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson7-2',
            title: '3D Modeling and Visualization',
            description: 'Creating photorealistic renderings and visualizations',
            duration: '5 hours',
            skills: ['3D visualization', 'Rendering', 'Lighting'],
            prerequisites: ['lesson7-1'],
            equipment: ['Computer', 'Rendering software', 'Graphics card'],
            videoUrl: 'https://youtube.com/embed/example14',
            assessment: {
              type: '3d_model',
              criteria: ['Visual quality', 'Realism', 'Technical execution'],
              aiFeedback: true
            }
          }
        ]
      },
      {
        id: 'term8',
        title: 'Physical Modeling and Prototyping',
        description: 'Traditional and modern manufacturing techniques',
        duration: '4 weeks',
        objectives: [
          'Learn clay modeling and sculpting',
          'Understand 3D printing and rapid prototyping',
          'Evaluate and refine designs'
        ],
        lessons: [
          {
            id: 'lesson8-1',
            title: 'Clay Modeling and Sculpting',
            description: 'Traditional automotive design techniques',
            duration: '8 hours',
            skills: ['Clay modeling', 'Sculpting', 'Physical design'],
            prerequisites: ['lesson7-2'],
            equipment: ['Clay', 'Sculpting tools', 'Work surface'],
            videoUrl: 'https://youtube.com/embed/example15',
            assessment: {
              type: 'portfolio',
              criteria: ['Sculpting quality', 'Form accuracy', 'Professional finish'],
              aiFeedback: true
            }
          }
        ]
      },
      {
        id: 'term9',
        title: 'Design Presentation & Professional Development',
        description: 'Professional communication and career preparation',
        duration: '4 weeks',
        objectives: [
          'Develop compelling presentations',
          'Build industry-ready portfolios',
          'Establish professional networks'
        ],
        lessons: [
          {
            id: 'lesson9-1',
            title: 'Compelling Presentations and Design Rationale',
            description: 'Professional communication skills for design',
            duration: '3 hours',
            skills: ['Presentation', 'Communication', 'Design rationale'],
            prerequisites: ['lesson8-1'],
            equipment: ['Presentation software', 'Portfolio materials'],
            videoUrl: 'https://youtube.com/embed/example16',
            assessment: {
              type: 'presentation',
              criteria: ['Communication quality', 'Professionalism', 'Content depth'],
              aiFeedback: true
            }
          },
          {
            id: 'lesson9-2',
            title: 'Portfolio Development for Industry',
            description: 'Building career-ready portfolios',
            duration: '4 hours',
            skills: ['Portfolio design', 'Career preparation', 'Industry standards'],
            prerequisites: ['lesson9-1'],
            equipment: ['Portfolio software', 'High-quality images'],
            videoUrl: 'https://youtube.com/embed/example17',
            assessment: {
              type: 'portfolio',
              criteria: ['Portfolio quality', 'Professional standards', 'Industry readiness'],
              aiFeedback: true
            }
          }
        ]
      }
    ]
  }
];

export const getLevelById = (id: string): Level | undefined => {
  return curriculum.find(level => level.id === id);
};

export const getTermById = (levelId: string, termId: string): Term | undefined => {
  const level = getLevelById(levelId);
  return level?.terms.find(term => term.id === termId);
};

export const getLessonById = (levelId: string, termId: string, lessonId: string): Lesson | undefined => {
  const term = getTermById(levelId, termId);
  return term?.lessons.find(lesson => lesson.id === lessonId);
};
