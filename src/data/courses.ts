export interface Course {
  id: number;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  price: string;
  thumbnail: string;
  lessons: string[];
  description?: string;
  duration?: string;
  studentsCount?: number;
}

export interface User {
  id: string;
  name: string;
  role: 'student' | 'instructor' | 'admin';
  enrolledCourses?: number[];
  progress?: Record<number, string>;
  coursesCreated?: number[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "React for Beginners",
    category: "Web Development",
    instructor: "Jane Doe",
    rating: 4.8,
    price: "Free",
    thumbnail: "/src/assets/react-course.jpg",
    lessons: ["Introduction to React", "JSX & Components", "State & Props", "Event Handling", "Conditional Rendering"],
    description: "Learn React from scratch with hands-on projects and real-world examples. Perfect for beginners who want to start their journey in modern web development.",
    duration: "4 weeks",
    studentsCount: 1250
  },
  {
    id: 2,
    title: "UI/UX Design Basics",
    category: "Design",
    instructor: "John Smith",
    rating: 4.6,
    price: "$49",
    thumbnail: "/src/assets/uiux-course.jpg",
    lessons: ["Design Principles", "User Research", "Wireframes", "Prototyping", "Visual Design"],
    description: "Master the fundamentals of user interface and user experience design. Create beautiful, functional designs that users love.",
    duration: "6 weeks",
    studentsCount: 890
  },
  {
    id: 3,
    title: "JavaScript Fundamentals",
    category: "Programming",
    instructor: "Mike Johnson",
    rating: 4.9,
    price: "$29",
    thumbnail: "/src/assets/react-course.jpg",
    lessons: ["Variables & Data Types", "Functions", "Objects & Arrays", "DOM Manipulation", "Async Programming"],
    description: "Build a solid foundation in JavaScript programming. Essential for anyone wanting to become a web developer.",
    duration: "5 weeks",
    studentsCount: 2100
  },
  {
    id: 4,
    title: "Advanced CSS Techniques",
    category: "Web Development",
    instructor: "Sarah Wilson",
    rating: 4.7,
    price: "$39",
    thumbnail: "/src/assets/uiux-course.jpg",
    lessons: ["Flexbox & Grid", "Animations", "Responsive Design", "CSS Variables", "Modern Layout Techniques"],
    description: "Take your CSS skills to the next level with advanced techniques and modern layout methods.",
    duration: "3 weeks",
    studentsCount: 756
  }
];

export const users: Record<string, User> = {
  student: {
    id: "student",
    name: "Alice Johnson",
    role: "student",
    enrolledCourses: [1, 2],
    progress: { 1: "70%", 2: "20%" }
  },
  instructor: {
    id: "instructor",
    name: "Jane Doe",
    role: "instructor",
    coursesCreated: [1]
  },
  admin: {
    id: "admin",
    name: "Admin User",
    role: "admin"
  }
};

export const quizSample = {
  courseId: 1,
  questions: [
    {
      id: 1,
      question: "What is JSX?",
      options: ["A template engine", "JavaScript syntax extension", "CSS library", "Database query language"],
      answer: "JavaScript syntax extension"
    },
    {
      id: 2,
      question: "Which hook is used to manage state in React?",
      options: ["useEffect", "useState", "useRouter", "useCallback"],
      answer: "useState"
    },
    {
      id: 3,
      question: "What does the virtual DOM provide?",
      options: ["Direct DOM manipulation", "Performance optimization", "CSS styling", "API calls"],
      answer: "Performance optimization"
    }
  ]
};