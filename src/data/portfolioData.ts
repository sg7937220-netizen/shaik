export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technology: string[];
  features: string[];
  pythonCode: string;
  demoType: 'voter' | 'atm' | 'grade';
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Shaik Ghousepeer",
    role: "B.Tech Student & Aspiring AI Engineer",
    tagline: "B.Tech Student | Aspiring AI Engineer | Python & Gen AI Enthusiast",
    heroDescription:
      "Building my foundation in AI, Python, web development, and Generative AI through projects, hackathons, and continuous learning.",
    aboutDescription:
      "I am a B.Tech student beginning my journey in technology and AI. I am currently building my foundation in Python, web development, and Generative AI while exploring AI engineering. I enjoy learning by building projects and participating in hackathons and ideathons.",
    learningFocus: [
      {
        title: "Python Programming",
        desc: "Mastering core language fundamentals, data structures, conditional control flows, and problem solving."
      },
      {
        title: "Web Development",
        desc: "Crafting structured, responsive user interfaces using modern HTML, CSS, JavaScript, and modern web frameworks."
      },
      {
        title: "Generative AI & Fundamentals",
        desc: "Understanding transformer concepts, prompt engineering techniques, and how AI systems process language."
      },
      {
        title: "AI Engineering Fundamentals",
        desc: "Learning how software systems integrate machine intelligence, APIs, and automated reasoning pipelines."
      }
    ]
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/shaik-ghousepeer-181b09431",
    github: "https://github.com/sg7937220-netizen"
  },
  education: {
    degree: "B.Tech — 1st Semester",
    status: "Currently pursuing undergraduate studies",
    academicFocus: "Undergraduate Engineering Foundation (Computer Science / Technology)",
    overview:
      "Currently in the first semester of my Bachelor of Technology program, focusing on fundamental computational principles, algorithmic logic, mathematics, and hands-on software development."
  },
  skills: [
    {
      category: "Programming",
      items: [
        { name: "Python", status: "Active Learning & Core Focus" }
      ]
    },
    {
      category: "Web Development",
      items: [
        { name: "HTML", status: "Semantic markup & page structures" },
        { name: "CSS", status: "Styling, layouts & visual hierarchy" },
        { name: "JavaScript", status: "DOM manipulation & interactive logic" },
        { name: "Basic Responsive Web Development", status: "Mobile-first layouts & flexible media queries" }
      ]
    },
    {
      category: "Artificial Intelligence",
      items: [
        { name: "Generative AI", status: "Exploring LLM capabilities & practical applications" },
        { name: "AI Fundamentals", status: "Core concepts of artificial intelligence & reasoning" },
        { name: "Prompt Engineering", status: "Structuring prompts for effective model responses" }
      ]
    },
    {
      category: "Development Skills",
      items: [
        { name: "Problem Solving", status: "Breaking complex tasks into modular algorithmic steps" },
        { name: "Project Building", status: "Applying theoretical concepts into runnable software" },
        { name: "Rapid Prototyping", status: "Iterating swiftly from idea to initial functional proof" },
        { name: "Learning through Hackathons & Ideathons", status: "Collaborating under time constraints to design solutions" }
      ]
    }
  ],
  projects: [
    {
      id: "voter-eligibility",
      title: "Voter Eligibility Calculator",
      category: "Python Beginner Project",
      description:
        "A beginner-friendly Python project that determines whether a person is eligible to vote based on their age and predefined eligibility conditions.",
      technology: ["Python"],
      demoType: "voter",
      features: [
        "Age verification logic validating minimum threshold (18 years)",
        "Handles edge cases like negative ages or non-numeric inputs",
        "Clear console feedback indicating eligibility status and remaining years until eligible"
      ],
      pythonCode: `# Voter Eligibility Calculator in Python
# Author: Shaik Ghousepeer

def check_voting_eligibility(age: int, is_citizen: bool = True) -> dict:
    if age < 0:
        return {"eligible": False, "message": "Invalid age entered. Age cannot be negative."}
    
    if not is_citizen:
        return {"eligible": False, "message": "Voting requires registered citizenship status."}
        
    MINIMUM_VOTING_AGE = 18
    
    if age >= MINIMUM_VOTING_AGE:
        return {
            "eligible": True,
            "message": f"Eligible to vote! You meet the minimum requirement of {MINIMUM_VOTING_AGE} years."
        }
    else:
        years_left = MINIMUM_VOTING_AGE - age
        return {
            "eligible": False,
            "message": f"Not eligible yet. You need to wait {years_left} more year(s) to vote."
        }

# Example execution:
if __name__ == "__main__":
    user_age = int(input("Enter your age: "))
    result = check_voting_eligibility(user_age)
    print(result["message"])
`
    },
    {
      id: "atm-management",
      title: "ATM Management",
      category: "Python Beginner Project",
      description:
        "A Python-based beginner project that simulates basic ATM operations such as account interaction, balance checking, deposits, withdrawals, and related banking operations.",
      technology: ["Python"],
      demoType: "atm",
      features: [
        "Interactive PIN verification simulation",
        "Real-time balance inquiry",
        "Deposit function updating current account balance",
        "Withdrawal logic ensuring non-negative balance checks"
      ],
      pythonCode: `# ATM Management System in Python
# Author: Shaik Ghousepeer

class ATMSystem:
    def __init__(self, initial_balance: float = 1000.0, pin: str = "1234"):
        self.balance = initial_balance
        self.pin = pin
        self.is_authenticated = False
        self.history = []

    def authenticate(self, input_pin: str) -> bool:
        if input_pin == self.pin:
            self.is_authenticated = True
            return True
        return False

    def check_balance(self) -> float:
        return self.balance

    def deposit(self, amount: float) -> str:
        if amount <= 0:
            return "Deposit amount must be greater than zero."
        self.balance += amount
        self.history.append(f"Deposited: ₹{amount:.2f}")
        return f"Successfully deposited ₹{amount:.2f}. New Balance: ₹{self.balance:.2f}"

    def withdraw(self, amount: float) -> str:
        if amount <= 0:
            return "Withdrawal amount must be greater than zero."
        if amount > self.balance:
            return "Insufficient funds. Transaction declined."
        self.balance -= amount
        self.history.append(f"Withdrew: ₹{amount:.2f}")
        return f"Successfully withdrawn ₹{amount:.2f}. Remaining Balance: ₹{self.balance:.2f}"
`
    },
    {
      id: "student-grade-calculator",
      title: "Student Grade Calculator",
      category: "Python Beginner Project",
      description:
        "A beginner Python project that calculates student grades based on marks and predefined grading criteria.",
      technology: ["Python"],
      demoType: "grade",
      features: [
        "Calculates total marks, average, and percentage across subjects",
        "Applies standard educational grading rubric (A+, A, B, C, D, F)",
        "Generates formatted summary report with status classification"
      ],
      pythonCode: `# Student Grade Calculator in Python
# Author: Shaik Ghousepeer

def calculate_grade(marks: list[float]) -> dict:
    if not marks:
        return {"error": "No marks provided"}
        
    total = sum(marks)
    count = len(marks)
    average = total / count
    percentage = (total / (count * 100)) * 100
    
    if percentage >= 90:
        grade = "A+ (Outstanding)"
        status = "Passed with Distinction"
    elif percentage >= 80:
        grade = "A (Excellent)"
        status = "Passed"
    elif percentage >= 70:
        grade = "B (Good)"
        status = "Passed"
    elif percentage >= 60:
        grade = "C (Satisfactory)"
        status = "Passed"
    elif percentage >= 50:
        grade = "D (Pass)"
        status = "Passed"
    else:
        grade = "F (Needs Improvement)"
        status = "Failed"

    return {
        "total": round(total, 2),
        "average": round(average, 2),
        "percentage": round(percentage, 2),
        "grade": grade,
        "status": status
    }
`
    }
  ] as Project[],
  hackathons: {
    heading: "Hackathons & Ideathons",
    purpose:
      "Hackathons and ideathons are where theory transforms into practical engineering. As a beginner, I participate in these events to challenge myself, learn from peers, and discover how technology can address genuine challenges.",
    pillars: [
      {
        title: "Explore Real-World Problems",
        desc: "Analyzing practical challenges outside textbook exercises to understand user needs and domain requirements."
      },
      {
        title: "Develop Innovative Ideas",
        desc: "Brainstorming creative approaches that leverage modern computational tools, Generative AI, and logic."
      },
      {
        title: "Build Functional Prototypes",
        desc: "Transforming abstract concepts into working minimum viable products under focused timeframes."
      },
      {
        title: "Work with Technology Hands-On",
        desc: "Experimenting with APIs, developer tools, web interfaces, and Python scripts in dynamic problem spaces."
      },
      {
        title: "Learn Teamwork & Problem-Solving",
        desc: "Collaborating with fellow students and mentors, exchanging constructive feedback, and debugging collectively."
      }
    ]
  }
};
