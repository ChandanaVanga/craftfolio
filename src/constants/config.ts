type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Chandana Vanga | Full Stack Developer",
    fullName: "Chandana Vanga",
    email: "chandana.vanga.04@mail.com",
  },

  hero: {
    name: "Chandana Vanga",
    p: [
      "I build scalable web applications with modern user interfaces and reliable backend systems.",
    ],
  },

  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m a Full Stack Developer with 4+ years of experience building scalable and 
      high-performance web applications. I specialize in Angular, TypeScript, C#, and .NET, 
      creating modern, responsive user interfaces and reliable backend APIs.
I have hands-on experience developing enterprise-level applications across domains such as 
education platforms and insurance systems, working with technologies like ASP.NET Core, 
ASP.NET Web Forms, RESTful APIs, Oracle, PostgreSQL, and DevExpress UI components. 
My work focuses on writing clean, maintainable code, optimizing application performance, and 
delivering solutions that meet real business requirements.
Throughout my career, I’ve collaborated with cross-functional teams in Agile environments, 
contributing to feature development, system optimization, and application modernization. 
I enjoy solving complex technical problems and building systems that provide efficient, scalable, 
and user-friendly experiences.

I’m passionate about continuous learning, improving software architecture, and leveraging modern technologies to build impactful digital solutions.`,
    },

    experience: {
      p: "My professional journey",
      h2: "Work Experience.",
    },

    feedbacks: {
      p: "What people say",
      h2: "Testimonials.",
    },

    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects showcase my experience in developing full-stack web 
      applications using Angular, .NET technologies, and modern database systems. They demonstrate 
      my ability to design responsive user interfaces, build secure and scalable backend APIs, 
      integrate databases, and deliver reliable end-to-end solutions.
      Each project reflects my approach to problem solving, clean code practices, and scalable 
      architecture, while focusing on building real-world applications that effectively meet 
      business needs and provide seamless user experiences.`,
    },
  },
};
