import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  Star, 
  Calendar, 
  Clock, 
  MapPin, 
  ExternalLink,
  MessageCircle,
  Video,
  FileText,
  Award,
  Briefcase,
  Globe
} from "lucide-react";
import { ExpertMentor, MentorshipSession } from "@/types/ai-feedback";

// Mock data for demonstration
const mockMentors: ExpertMentor[] = [
  {
    id: "1",
    name: "Sarah Chen",
    title: "Senior Exterior Designer",
    company: "Tesla",
    experience: 8,
    specialties: ["Electric Vehicle Design", "Sustainable Materials", "Aerodynamics"],
    availability: {
      timezone: "PST",
      schedule: {
        "Monday": ["9:00 AM", "2:00 PM", "4:00 PM"],
        "Tuesday": ["10:00 AM", "3:00 PM"],
        "Wednesday": ["9:00 AM", "2:00 PM", "4:00 PM"],
        "Thursday": ["10:00 AM", "3:00 PM"],
        "Friday": ["9:00 AM", "2:00 PM"]
      }
    },
    rating: 4.9,
    bio: "Sarah has been designing electric vehicles for over 8 years, with expertise in sustainable design and aerodynamics. She's passionate about mentoring the next generation of automotive designers.",
    profileImage: "/api/placeholder/100/100",
    linkedinUrl: "https://linkedin.com/in/sarahchen",
    portfolioUrl: "https://sarahchen.design"
  },
  {
    id: "2",
    name: "Marcus Rodriguez",
    title: "Lead Interior Designer",
    company: "BMW",
    experience: 12,
    specialties: ["Luxury Interiors", "User Experience", "Ergonomics"],
    availability: {
      timezone: "CET",
      schedule: {
        "Monday": ["10:00 AM", "3:00 PM"],
        "Tuesday": ["9:00 AM", "2:00 PM", "4:00 PM"],
        "Wednesday": ["10:00 AM", "3:00 PM"],
        "Thursday": ["9:00 AM", "2:00 PM", "4:00 PM"],
        "Friday": ["10:00 AM", "3:00 PM"]
      }
    },
    rating: 4.8,
    bio: "Marcus brings 12 years of experience in luxury automotive interiors, focusing on user experience and ergonomic design. He's worked on award-winning BMW interiors.",
    profileImage: "/api/placeholder/100/100",
    linkedinUrl: "https://linkedin.com/in/marcusrodriguez"
  },
  {
    id: "3",
    name: "Dr. Elena Volkov",
    title: "Design Director",
    company: "Aston Martin",
    experience: 15,
    specialties: ["Concept Design", "Brand Identity", "Advanced Materials"],
    availability: {
      timezone: "GMT",
      schedule: {
        "Monday": ["9:00 AM", "2:00 PM"],
        "Tuesday": ["10:00 AM", "3:00 PM"],
        "Wednesday": ["9:00 AM", "2:00 PM"],
        "Thursday": ["10:00 AM", "3:00 PM"],
        "Friday": ["9:00 AM", "2:00 PM"]
      }
    },
    rating: 5.0,
    bio: "Dr. Volkov is a design director with 15 years of experience in luxury automotive design. She holds a PhD in Industrial Design and has led numerous award-winning projects.",
    profileImage: "/api/placeholder/100/100",
    linkedinUrl: "https://linkedin.com/in/elenavolkov",
    portfolioUrl: "https://elenavolkov.design"
  }
];

const mockSessions: MentorshipSession[] = [
  {
    id: "1",
    mentorId: "1",
    studentId: "student1",
    type: "portfolio_review",
    scheduledTime: new Date("2024-02-15T14:00:00Z"),
    duration: 60,
    status: "scheduled",
    notes: "Portfolio review focusing on exterior design projects"
  },
  {
    id: "2",
    mentorId: "2",
    studentId: "student1",
    type: "skill_guidance",
    scheduledTime: new Date("2024-02-20T10:00:00Z"),
    duration: 45,
    status: "completed",
    notes: "Interior design techniques and ergonomics",
    feedback: "Great progress on interior design concepts. Focus on material selection and user experience.",
    recordingUrl: "https://example.com/recording1"
  }
];

const ExpertMentorship = () => {

  const getSessionTypeIcon = (type: string) => {
    switch (type) {
      case "portfolio_review": return FileText;
      case "skill_guidance": return MessageCircle;
      case "career_advice": return Briefcase;
      case "live_workshop": return Video;
      default: return MessageCircle;
    }
  };

  const getSessionTypeLabel = (type: string) => {
    switch (type) {
      case "portfolio_review": return "Portfolio Review";
      case "skill_guidance": return "Skill Guidance";
      case "career_advice": return "Career Advice";
      case "live_workshop": return "Live Workshop";
      default: return type;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Connect with <span className="text-accent">Industry Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Learn directly from professionals who've worked at leading automotive brands
            </p>
          </div>

          {/* Expert Mentorship Accordion */}
          <Accordion type="multiple" className="space-y-4">
            {/* Expert Mentors */}
            <AccordionItem value="mentors" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={24} />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-primary">Expert Mentors</h3>
                    <p className="text-sm text-muted-foreground">Connect with industry professionals</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mockMentors.map((mentor) => (
                    <Card key={mentor.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={mentor.profileImage} />
                            <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-card-foreground">{mentor.name}</h3>
                            <p className="text-sm text-muted-foreground">{mentor.title}</p>
                            <p className="text-sm text-primary font-medium">{mentor.company}</p>
                            <div className="flex items-center gap-1 mt-1">
                              <Star className="text-yellow-500" size={14} />
                              <span className="text-sm font-medium">{mentor.rating}</span>
                              <span className="text-xs text-muted-foreground">({mentor.experience} years exp.)</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {mentor.bio}
                        </p>

                        <div className="mb-4">
                          <h4 className="text-sm font-medium mb-2">Specialties</h4>
                          <div className="flex flex-wrap gap-1">
                            {mentor.specialties.map((specialty, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                            <Clock size={12} />
                            <span>Available in {mentor.availability.timezone}</span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" className="flex-1">
                                View Profile
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle className="flex items-center gap-2">
                                  <Users className="text-primary" size={20} />
                                  {mentor.name} - Profile
                                </DialogTitle>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                  <Avatar className="w-20 h-20">
                                    <AvatarImage src={mentor.profileImage} />
                                    <AvatarFallback>{mentor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                  </Avatar>
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold">{mentor.name}</h3>
                                    <p className="text-muted-foreground">{mentor.title} at {mentor.company}</p>
                                    <div className="flex items-center gap-4 mt-2">
                                      <div className="flex items-center gap-1">
                                        <Star className="text-yellow-500" size={16} />
                                        <span className="font-medium">{mentor.rating}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Award className="text-primary" size={16} />
                                        <span className="text-sm">{mentor.experience} years experience</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium mb-2">About</h4>
                                  <p className="text-sm text-muted-foreground">{mentor.bio}</p>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-2">Specialties</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {mentor.specialties.map((specialty, index) => (
                                      <Badge key={index} variant="secondary">
                                        {specialty}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>

                                <div>
                                  <h4 className="font-medium mb-2">Availability</h4>
                                  <div className="text-sm text-muted-foreground">
                                    Timezone: {mentor.availability.timezone}
                                  </div>
                                </div>

                                <div className="flex gap-2">
                                  <Button className="flex-1">
                                    Book Session
                                  </Button>
                                  {mentor.linkedinUrl && (
                                    <Button variant="outline" size="sm">
                                      <ExternalLink size={16} />
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                          <Button variant="outline" size="sm">
                            Message
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* My Sessions */}
            <AccordionItem value="sessions" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Calendar className="text-accent" size={24} />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-primary">My Sessions</h3>
                    <p className="text-sm text-muted-foreground">Your mentorship sessions and history</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-4">
                  {mockSessions.map((session) => {
                    const mentor = mockMentors.find(m => m.id === session.mentorId);
                    const SessionIcon = getSessionTypeIcon(session.type);
                    
                    return (
                      <Card key={session.id} className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              <SessionIcon className="text-primary" size={20} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold">{getSessionTypeLabel(session.type)}</h3>
                                <Badge className={getStatusColor(session.status)}>
                                  {session.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mb-2">
                                with {mentor?.name} • {session.duration} minutes
                              </p>
                              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Calendar size={12} />
                                  <span>{session.scheduledTime.toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock size={12} />
                                  <span>{session.scheduledTime.toLocaleTimeString()}</span>
                                </div>
                              </div>
                              {session.notes && (
                                <p className="text-sm text-muted-foreground mt-2">{session.notes}</p>
                              )}
                              {session.feedback && (
                                <div className="mt-3 p-3 bg-muted rounded-lg">
                                  <h4 className="text-sm font-medium mb-1">Feedback</h4>
                                  <p className="text-sm text-muted-foreground">{session.feedback}</p>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            {session.status === "scheduled" && (
                              <Button size="sm" variant="outline">
                                Reschedule
                              </Button>
                            )}
                            {session.status === "completed" && session.recordingUrl && (
                              <Button size="sm">
                                Watch Recording
                              </Button>
                            )}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Live Workshops */}
            <AccordionItem value="workshops" className="border rounded-lg">
              <AccordionTrigger className="px-6 py-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  <Video className="text-primary" size={24} />
                  <div className="text-left">
                    <h3 className="text-xl font-bold text-primary">Live Workshops</h3>
                    <p className="text-sm text-muted-foreground">Interactive sessions with experts</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="text-center py-12">
                  <Video className="mx-auto text-muted-foreground mb-4" size={48} />
                  <h3 className="text-lg font-semibold mb-2">Live Workshops Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    Interactive workshops with industry experts will be available soon.
                  </p>
                  <Button>Get Notified</Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExpertMentorship;
