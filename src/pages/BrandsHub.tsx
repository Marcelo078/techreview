import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react";

const BrandsHub = () => {
  const brands = [
    { name: "Acer", slug: "acer", category: "Notebooks", description: "Nitro e Predator" },
    { name: "ASUS", slug: "asus", category: "Notebooks", description: "ROG e TUF Gaming" },
    { name: "Dell", slug: "dell", category: "Notebooks", description: "Alienware e Série G" },
    { name: "Lenovo", slug: "lenovo", category: "Notebooks", description: "Legion e IdeaPad" },
    { name: "Samsung", slug: "samsung", category: "Monitores", description: "Odyssey Gaming" },
    { name: "Sony", slug: "sony", category: "Consoles", description: "PlayStation 5" },
  ];

  return (
    <>
      <Helmet>
        <title>Índice de Marcas Gaming - Todas as Marcas | Games Reviews</title>
        <meta name="description" content="Explore análises completas por marca: Acer, ASUS, Dell, Lenovo, Samsung, Sony. Comparativos e reviews detalhados." />
        <link rel="canonical" href="https://melhor-reviews.lovable.app/marcas" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">Hub de Marcas</Badge>
            <h1 className="text-5xl font-bold mb-4">Explore por Marca</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Análises completas e comparativos de todas as principais marcas gaming
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <Link key={brand.slug} to={`/marcas/${brand.slug}`} className="group">
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-gaming transition-all hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Building2 className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors">{brand.name}</h2>
                      <Badge variant="outline" className="mb-2">{brand.category}</Badge>
                      <p className="text-muted-foreground">{brand.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BrandsHub;
