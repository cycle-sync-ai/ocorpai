import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Brain, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  CheckCircle, 
  AlertTriangle,
  Star,
  ArrowRight,
  FileImage,
  Video,
  FileText
} from "lucide-react";
import { AIFeedback, Submission, AIAnalysisResult } from "@/types/ai-feedback";

interface AIFeedbackProps {
  feedback: AIFeedback;
  submission: Submission;
  analysis: AIAnalysisResult;
}

const AIFeedbackComponent = ({ feedback, submission, analysis }: AIFeedbackProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBg = (score: number) => {
    if (score >= 80) return "bg-green-100";
    if (score >= 60) return "bg-yellow-100";
    return "bg-red-100";
  };

  const technicalScores = [
    { name: "Perspective", score: feedback.technicalAssessment.perspective },
    { name: "Proportions", score: feedback.technicalAssessment.proportions },
    { name: "Line Quality", score: feedback.technicalAssessment.lineQuality },
    { name: "Composition", score: feedback.technicalAssessment.composition },
    { name: "Creativity", score: feedback.technicalAssessment.creativity }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Brain className="text-primary" size={32} />
          <h2 className="text-3xl font-bold text-primary">AI Design Analysis</h2>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Badge variant="outline" className="text-sm">
            Confidence: {feedback.aiConfidence}%
          </Badge>
          <Badge variant="outline" className="text-sm">
            {feedback.skillLevel.charAt(0).toUpperCase() + feedback.skillLevel.slice(1)} Level
          </Badge>
        </div>
      </div>

      {/* Overall Score */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Star className="text-primary" size={24} />
            <span className="text-2xl font-bold text-primary">Overall Score</span>
          </div>
          <div className={`text-4xl font-bold ${getScoreColor(feedback.overallScore)} mb-4`}>
            {feedback.overallScore}/100
          </div>
          <Progress value={feedback.overallScore} className="h-3 mb-4" />
          <p className="text-muted-foreground">
            {feedback.overallScore >= 80 
              ? "Excellent work! You're demonstrating strong design skills." 
              : feedback.overallScore >= 60 
              ? "Good progress! Focus on the areas for improvement." 
              : "Keep practicing! Focus on the fundamentals and keep learning."
            }
          </p>
        </div>
      </Card>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="technical">Technical</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="next">Next Steps</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-green-600" size={20} />
                <h3 className="text-lg font-semibold">Strengths</h3>
              </div>
              <ul className="space-y-2">
                {feedback.feedback.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-green-600 mt-1">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Areas for Improvement */}
            <Card className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="text-blue-600" size={20} />
                <h3 className="text-lg font-semibold">Areas for Improvement</h3>
              </div>
              <ul className="space-y-2">
                {feedback.feedback.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Specific Recommendations */}
          <Card className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="text-yellow-600" size={20} />
              <h3 className="text-lg font-semibold">Specific Recommendations</h3>
            </div>
            <ul className="space-y-2">
              {feedback.feedback.specificRecommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="text-yellow-600 mt-1">•</span>
                  <span>{recommendation}</span>
                </li>
              ))}
            </ul>
          </Card>
        </TabsContent>

        {/* Technical Tab */}
        <TabsContent value="technical" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-6">Technical Assessment</h3>
            <div className="space-y-4">
              {technicalScores.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.name}</span>
                    <span className={`font-bold ${getScoreColor(item.score)}`}>
                      {item.score}/100
                    </span>
                  </div>
                  <Progress value={item.score} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Analysis Results */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">AI Analysis Results</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Detected Elements</h4>
                <div className="flex flex-wrap gap-1">
                  {analysis.analysis.detectedElements.map((element, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {element}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium mb-2">Common Mistakes</h4>
                <ul className="space-y-1">
                  {analysis.analysis.commonMistakes.map((mistake, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <AlertTriangle className="text-orange-500 mt-1 flex-shrink-0" size={14} />
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Feedback Tab */}
        <TabsContent value="feedback" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Detailed Feedback</h3>
            <div className="space-y-4">
              <Alert>
                <Brain className="h-4 w-4" />
                <AlertDescription>
                  The AI has analyzed your submission and provided comprehensive feedback 
                  based on automotive design principles and industry standards.
                </AlertDescription>
              </Alert>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Quality Metrics</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(analysis.analysis.qualityMetrics).map(([metric, score]) => (
                      <div key={metric} className="text-center">
                        <div className={`text-2xl font-bold ${getScoreColor(score)}`}>
                          {score}
                        </div>
                        <div className="text-sm text-muted-foreground capitalize">
                          {metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* Next Steps Tab */}
        <TabsContent value="next" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recommended Next Steps</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Recommended Lessons</h4>
                <div className="space-y-2">
                  {feedback.nextSteps.recommendedLessons.map((lesson, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                      <Target className="text-primary" size={16} />
                      <span className="text-sm">{lesson}</span>
                      <Button size="sm" variant="outline" className="ml-auto">
                        Start
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Practice Areas</h4>
                <div className="flex flex-wrap gap-2">
                  {feedback.nextSteps.practiceAreas.map((area, index) => (
                    <Badge key={index} variant="secondary">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Additional Resources</h4>
                <div className="space-y-2">
                  {feedback.nextSteps.resources.map((resource, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded">
                      <FileText className="text-muted-foreground" size={16} />
                      <span className="text-sm">{resource}</span>
                      <ArrowRight className="text-muted-foreground ml-auto" size={16} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AIFeedbackComponent;
