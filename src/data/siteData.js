import aucklandRiver from '../assets/journey/auckland-river.jpg'
import aucklandWaterfall from '../assets/journey/auckland-waterfall.jpg'
import chicagoBears from '../assets/journey/chicago-bears.jpg'
import chicagoBulls from '../assets/journey/chicago-bulls.jpg'
import delhiSchool from '../assets/journey/delhi-school.jpg'
import madisonKHK from '../assets/journey/madison-khk.jpg'
import newYorkSkyline from '../assets/journey/newyork-skyline.jpg'
import newYorkTimesSquare from '../assets/journey/newyork-times-square.jpg'
import punjabChildhood from '../assets/journey/punjab-childhood.jpg'

export const portfolioProjects = [
  {
    title: 'Eurofins Predictive Analytics System',
    description:
      'Built an end-to-end FastAPI + React + TypeScript system that transforms historical lab data into analyte forecasts and decision support for technicians.',
    tags: ['FastAPI', 'React', 'TypeScript'],
  },
  {
    title: 'AI Chatbot Platform',
    description:
      'Created a RAG-based platform using LangChain, Pinecone, and OpenAI APIs so non-technical users could search documents and interact with domain-specific AI assistants.',
    tags: ['LangChain', 'Pinecone', 'OpenAI'],
  },
  {
    title: 'Formula 1 Race Strategy Pipeline',
    description:
      'Developed a machine learning pipeline that combines telemetry, pit stop strategy, and weather data to predict race outcomes and support strategy decisions.',
    tags: ['Python', 'FastF1', 'ML'],
  },
]

export const mapData = {
  India: {
    summary:
      'India is where my story begins. It shaped my childhood, family memories, and the early experiences that made me who I am.',
    locations: {
      Delhi: {
        title: 'Where I grew up',
        subtitle: 'Born and raised in the city that started it all.',
        story:
          'I was born in Delhi and stayed there through high school. It is the place where I grew up, went to school, and built many of my earliest friendships and memories. My paternal grandparents still live there, so Delhi continues to feel like home even as my life has expanded across different countries.',
        highlights: [
          'Born in Delhi',
          'Completed school there through high school',
          'My paternal grandparents still live there',
        ],
        images: [
          {
            src: delhiSchool,
            alt: 'Karan in formal clothes with friends during his school years in Delhi',
          },
        ],
      },
      Punjab: {
        title: 'Family roots and summer memories',
        subtitle: 'A place tied to grandparents, food, and childhood summers.',
        story:
          'Punjab reminds me of summer vacations as a kid. My maternal grandparents lived there, and I used to visit them every summer. My grandmother would always make me amazing food, and I loved playing cricket with my maternal grandpa. It is one of the places that feels the most personal and nostalgic to me.',
        highlights: [
          'Visited every summer as a child',
          'My maternal grandparents lived there',
          'A lot of my favorite childhood memories came from those trips',
        ],
        images: [
          {
            src: punjabChildhood,
            alt: 'A childhood photo representing Karan’s early memories and family roots in Punjab',
          },
        ],
      },
    },
  },
  'New Zealand': {
    summary:
      'New Zealand represents a major transition in my life — a move that happened right before college and gave me a new perspective.',
    locations: {
      Auckland: {
        title: 'A big move before college',
        subtitle: 'A chapter of change, family, and reconnecting.',
        story:
          'After I graduated high school, my parents and I moved to Auckland during the summer before college. Later, I visited them again during my sophomore year winter break. My aunt and her family also live there, so Auckland has become an important family location for me and represents a major transition in my life.',
        highlights: [
          'Moved there with my parents right before college',
          'Visited during sophomore year winter break',
          'My aunt and her family also live there',
        ],
        images: [
          {
            src: aucklandRiver,
            alt: 'Karan standing by a river in New Zealand',
          },
          {
            src: aucklandWaterfall,
            alt: 'Karan standing near a waterfall in New Zealand',
          },
        ],
      },
    },
  },
  US: {
    summary:
      'The United States is where my current chapter is unfolding — college, leadership, friendships, and some of my most exciting experiences so far.',
    locations: {
      Madison: {
        title: 'College, growth, and community',
        subtitle: 'The city where I am building my future.',
        story:
          'Madison is where I attend UW–Madison and where a huge part of my life today takes place. It is where I study computer science and data science, and it is also where I became part of Kappa Eta Kappa. Madison represents personal growth, community, leadership, and a big part of who I am today.',
        highlights: [
          'Current college home at UW–Madison',
          'Part of Kappa Eta Kappa',
          'A major part of my growth as a student and leader',
        ],
        images: [
          {
            src: madisonKHK,
            alt: 'Karan with members of Kappa Eta Kappa in Madison',
          },
        ],
      },
      'New York': {
        title: 'A meaningful family visit',
        subtitle: 'More than a trip — it was a rare family connection.',
        story:
          'My trip to New York was especially meaningful because it was about visiting relatives. I was the first person from our family to visit them in the past 35 years, since most of our family lives outside the United States. That made the experience much bigger than just seeing the city — it felt like reconnecting family across distance and time.',
        highlights: [
          'Visited relatives in New York',
          'First person from our family to visit them in 35 years',
          'A trip that felt deeply personal and memorable',
        ],
        images: [
          {
            src: newYorkSkyline,
            alt: 'Karan with a family member in front of the New York skyline',
          },
          {
            src: newYorkTimesSquare,
            alt: 'Karan standing in Times Square in New York',
          },
        ],
      },
      Chicago: {
        title: 'Sports, city energy, and good memories',
        subtitle: 'A place tied to friends and game-day experiences.',
        story:
          'Chicago is a place I have visited multiple times, including for Thanksgiving at a friend’s place and for Bears games. A lot of my memories there are tied to sports, city energy, and spending time with people I enjoy being around. It is one of those cities that always feels exciting every time I go back.',
        highlights: [
          'Visited for Thanksgiving at a friend’s place',
          'Been there multiple times for Bears games',
          'A city I associate with sports and fun memories',
        ],
        images: [
          {
            src: chicagoBears,
            alt: 'Karan with a friend in Bears jerseys in Chicago',
          },
          {
            src: chicagoBulls,
            alt: 'Inside the Bulls arena in Chicago',
          },
        ],
      },
    },
  },
}