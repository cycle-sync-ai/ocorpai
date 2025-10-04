import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Share, 
  Download,
  Star,
  Heart,
  MessageCircle,
  ExternalLink,
  Image,
  Video,
  FileText,
  Upload,
  Grid,
  List,
  Filter,
  Search
} from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  category: 'exterior' | 'interior' | 'concept' | 'sketch' | '3d_model';
  images: string[];
  videos?: string[];
  documents?: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  likes: number;
  views: number;
  comments: number;
}

interface PortfolioManagerProps {
  items: PortfolioItem[];
  onAddItem: (item: Omit<PortfolioItem, 'id' | 'createdAt' | 'updatedAt' | 'likes' | 'views' | 'comments'>) => void;
  onEditItem: (id: string, item: Partial<PortfolioItem>) => void;
  onDeleteItem: (id: string) => void;
  onTogglePublic: (id: string) => void;
}

const PortfolioManager = ({ 
  items, 
  onAddItem, 
  onEditItem, 
  onDeleteItem, 
  onTogglePublic 
}: PortfolioManagerProps) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');

  const categories = [
    { id: 'all', label: 'All Projects', count: items.length },
    { id: 'exterior', label: 'Exterior Design', count: items.filter(item => item.category === 'exterior').length },
    { id: 'interior', label: 'Interior Design', count: items.filter(item => item.category === 'interior').length },
    { id: 'concept', label: 'Concept Design', count: items.filter(item => item.category === 'concept').length },
    { id: 'sketch', label: 'Sketches', count: items.filter(item => item.category === 'sketch').length },
    { id: '3d_model', label: '3D Models', count: items.filter(item => item.category === '3d_model').length }
  ];

  const filteredItems = items
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)
    .filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'oldest':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        case 'popular':
          return (b.likes + b.views) - (a.likes + a.views);
        default:
          return 0;
      }
    });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'exterior': return '🚗';
      case 'interior': return '🪑';
      case 'concept': return '💡';
      case 'sketch': return '✏️';
      case '3d_model': return '🎯';
      default: return '📁';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'exterior': return 'bg-blue-100 text-blue-800';
      case 'interior': return 'bg-green-100 text-green-800';
      case 'concept': return 'bg-purple-100 text-purple-800';
      case 'sketch': return 'bg-orange-100 text-orange-800';
      case '3d_model': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Portfolio <span className="text-accent">Manager</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Showcase your automotive design work and build your professional portfolio
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Plus className="mr-2" size={20} />
                  Add Project
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Project</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Project Title</label>
                    <input
                      type="text"
                      placeholder="Enter project title"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Description</label>
                    <textarea
                      placeholder="Describe your project"
                      className="w-full px-3 py-2 border rounded-lg h-20"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <select className="w-full px-3 py-2 border rounded-lg">
                      <option value="exterior">Exterior Design</option>
                      <option value="interior">Interior Design</option>
                      <option value="concept">Concept Design</option>
                      <option value="sketch">Sketch</option>
                      <option value="3d_model">3D Model</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Tags</label>
                    <input
                      type="text"
                      placeholder="Enter tags separated by commas"
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Upload Files</label>
                    <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                      <Upload className="mx-auto text-muted-foreground mb-2" size={32} />
                      <p className="text-sm text-muted-foreground mb-4">
                        Drag and drop files here, or click to browse
                      </p>
                      <Button variant="outline">Choose Files</Button>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1">Create Project</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-2 border rounded-lg"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
              </select>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
              >
                {viewMode === 'grid' ? <List size={16} /> : <Grid size={16} />}
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label} ({category.count})
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                {filteredItems.length === 0 ? (
                  <Card className="p-12 text-center">
                    <div className="text-muted-foreground mb-4">
                      <Image size={48} className="mx-auto mb-4" />
                      <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                      <p className="text-sm">
                        {searchQuery 
                          ? "Try adjusting your search terms"
                          : "Start building your portfolio by adding your first project"
                        }
                      </p>
                    </div>
                    {!searchQuery && (
                      <Button>
                        <Plus className="mr-2" size={16} />
                        Add Your First Project
                      </Button>
                    )}
                  </Card>
                ) : (
                  <div className={viewMode === 'grid' 
                    ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" 
                    : "space-y-4"
                  }>
                    {filteredItems.map((item) => (
                      <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                        {viewMode === 'grid' ? (
                          <>
                            <div className="relative h-48 bg-muted">
                              {item.images.length > 0 ? (
                                <img
                                  src={item.images[0]}
                                  alt={item.title}
                                  className="w-full h-full object-cover"
                                />
                              ) : (
                                <div className="flex items-center justify-center h-full text-muted-foreground">
                                  <Image size={48} />
                                </div>
                              )}
                              <div className="absolute top-2 right-2">
                                <Badge className={getCategoryColor(item.category)}>
                                  {getCategoryIcon(item.category)} {item.category}
                                </Badge>
                              </div>
                              {!item.isPublic && (
                                <div className="absolute top-2 left-2">
                                  <Badge variant="secondary">Private</Badge>
                                </div>
                              )}
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-card-foreground mb-2 line-clamp-1">
                                {item.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Heart size={12} />
                                    <span>{item.likes}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Eye size={12} />
                                    <span>{item.views}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <MessageCircle size={12} />
                                    <span>{item.comments}</span>
                                  </div>
                                </div>
                                <div className="flex gap-1">
                                  <Button size="sm" variant="ghost">
                                    <Eye size={14} />
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <Edit size={14} />
                                  </Button>
                                  <Button size="sm" variant="ghost">
                                    <Share size={14} />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="p-4">
                            <div className="flex items-start gap-4">
                              <div className="w-20 h-20 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                                {item.images.length > 0 ? (
                                  <img
                                    src={item.images[0]}
                                    alt={item.title}
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                ) : (
                                  <Image className="text-muted-foreground" size={24} />
                                )}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-start justify-between mb-2">
                                  <div>
                                    <h3 className="font-semibold text-card-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                  <div className="flex gap-1">
                                    <Button size="sm" variant="ghost">
                                      <Eye size={14} />
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                      <Edit size={14} />
                                    </Button>
                                    <Button size="sm" variant="ghost">
                                      <Share size={14} />
                                    </Button>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                                  <Badge className={getCategoryColor(item.category)}>
                                    {getCategoryIcon(item.category)} {item.category}
                                  </Badge>
                                  <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1">
                                      <Heart size={12} />
                                      <span>{item.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <Eye size={12} />
                                      <span>{item.views}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      <MessageCircle size={12} />
                                      <span>{item.comments}</span>
                                    </div>
                                  </div>
                                  <span>{item.createdAt.toLocaleDateString()}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default PortfolioManager;
