import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Download,
  FileText,
  Video,
  Image,
  Upload,
  CheckCircle,
  Clock,
  Target,
  BookOpen,
  Lightbulb,
  Users
} from "lucide-react";
import { Lesson } from "@/data/curriculum";

interface LessonContentProps {
  lesson: Lesson;
  onComplete: () => void;
  onNext: () => void;
  onPrevious: () => void;
  isCompleted?: boolean;
  progress?: number;
}

const LessonContent = ({ 
  lesson, 
  onComplete, 
  onNext, 
  onPrevious, 
  isCompleted = false, 
  progress = 0 
}: LessonContentProps) => {
  const [currentTab, setCurrentTab] = useState("content");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleVolumeToggle = () => {
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleComplete = () => {
    onComplete();
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Lesson Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Badge variant="outline" className="text-sm">
            {lesson.duration}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            {lesson.skills.length} skills
          </Badge>
          {isCompleted && (
            <Badge className="bg-green-100 text-green-800">
              <CheckCircle size={14} className="mr-1" />
              Completed
            </Badge>
          )}
        </div>
        
        <h1 className="text-3xl font-bold text-primary mb-4">{lesson.title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{lesson.description}</p>
        
        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="assignment">Assignment</TabsTrigger>
          <TabsTrigger value="discussion">Discussion</TabsTrigger>
        </TabsList>

        {/* Content Tab */}
        <TabsContent value="content" className="space-y-6">
          {/* Video Player */}
          {lesson.videoUrl && (
            <Card className="overflow-hidden">
              <div className="relative bg-black">
                <div className="aspect-video bg-gray-900 flex items-center justify-center">
                  {isPlaying ? (
                    <div className="text-white text-center">
                      <div className="text-4xl mb-4">▶️</div>
                      <p>Video Playing</p>
                    </div>
                  ) : (
                    <div className="text-white text-center">
                      <div className="text-4xl mb-4">⏸️</div>
                      <p>Video Paused</p>
                    </div>
                  )}
                </div>
                
                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-white hover:bg-white/20"
                      onClick={handlePlayPause}
                    >
                      {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                    </Button>
                    
                    <div className="flex-1 bg-white/20 rounded-full h-1">
                      <div className="bg-white h-1 rounded-full w-1/3"></div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20"
                        onClick={handleVolumeToggle}
                      >
                        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                      </Button>
                      
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:bg-white/20"
                        onClick={handleFullscreen}
                      >
                        <Maximize size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          )}

          {/* Lesson Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Skills to Learn */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Skills You'll Learn</h3>
              </div>
              <div className="space-y-2">
                {lesson.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={16} />
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Equipment Needed */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-accent" size={20} />
                <h3 className="text-lg font-semibold">Equipment Needed</h3>
              </div>
              <div className="space-y-2">
                {lesson.equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Prerequisites */}
          {lesson.prerequisites.length > 0 && (
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-600" size={20} />
                <h3 className="text-lg font-semibold">Prerequisites</h3>
              </div>
              <div className="space-y-2">
                {lesson.prerequisites.map((prereq, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-yellow-600">•</span>
                    <span className="text-sm">{prereq}</span>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Resources Tab */}
        <TabsContent value="resources" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Documents */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Documents</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <FileText className="text-muted-foreground" size={16} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Lesson Guide</p>
                    <p className="text-xs text-muted-foreground">PDF • 2.3 MB</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download size={14} />
                  </Button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <FileText className="text-muted-foreground" size={16} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Reference Materials</p>
                    <p className="text-xs text-muted-foreground">PDF • 1.8 MB</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Download size={14} />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Additional Videos */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Video className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Additional Videos</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Video className="text-muted-foreground" size={16} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Advanced Techniques</p>
                    <p className="text-xs text-muted-foreground">15 min • Optional</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Play size={14} />
                  </Button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                  <Video className="text-muted-foreground" size={16} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Common Mistakes</p>
                    <p className="text-xs text-muted-foreground">8 min • Recommended</p>
                  </div>
                  <Button size="sm" variant="outline">
                    <Play size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Interactive Content */}
          {lesson.interactiveContent && (
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-accent" size={20} />
                <h3 className="text-lg font-semibold">Interactive Exercise</h3>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Practice the techniques you've learned with this interactive exercise.
                </p>
                <Button>Start Exercise</Button>
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Assignment Tab */}
        <TabsContent value="assignment" className="space-y-6">
          {lesson.assessment && (
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-primary" size={20} />
                <h3 className="text-lg font-semibold">Assignment</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Assignment Type</h4>
                  <Badge variant="outline">
                    {lesson.assessment.type.charAt(0).toUpperCase() + lesson.assessment.type.slice(1)}
                  </Badge>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Assessment Criteria</h4>
                  <ul className="space-y-1">
                    {lesson.assessment.criteria.map((criterion, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">•</span>
                        <span>{criterion}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Submit Your Work</h4>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="mx-auto text-muted-foreground mb-2" size={32} />
                    <p className="text-sm text-muted-foreground mb-4">
                      Upload your design files, sketches, or 3D models
                    </p>
                    <div className="flex gap-2 justify-center">
                      <Button variant="outline">
                        <Image size={16} className="mr-2" />
                        Upload Images
                      </Button>
                      <Button variant="outline">
                        <FileText size={16} className="mr-2" />
                        Upload Documents
                      </Button>
                    </div>
                  </div>
                </div>

                {lesson.assessment.aiFeedback && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="text-blue-600" size={16} />
                      <span className="text-sm font-medium">AI Feedback Available</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Your submission will be automatically analyzed by our AI system for instant feedback.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          )}
        </TabsContent>

        {/* Discussion Tab */}
        <TabsContent value="discussion" className="space-y-6">
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="text-primary" size={20} />
              <h3 className="text-lg font-semibold">Lesson Discussion</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-sm">Sarah Chen</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Great lesson! The perspective techniques really helped me understand the fundamentals.
                </p>
              </div>
              
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-sm">Marcus Rodriguez</span>
                  <span className="text-xs text-muted-foreground">1 day ago</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  I found the geometric approach very helpful. Any tips for improving line quality?
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Share your thoughts..."
                  className="flex-1 px-3 py-2 border rounded-lg text-sm"
                />
                <Button size="sm">Post</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t">
        <Button variant="outline" onClick={onPrevious}>
          Previous Lesson
        </Button>
        
        <div className="flex gap-2">
          {!isCompleted && (
            <Button onClick={handleComplete}>
              Mark as Complete
            </Button>
          )}
          <Button onClick={onNext}>
            Next Lesson
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonContent;
