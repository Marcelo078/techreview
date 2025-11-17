import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Transparency from "./pages/Transparency";
import Games from "./pages/Games";
import Consoles from "./pages/Consoles";
import Accessories from "./pages/Accessories";
import Notebooks from "./pages/Notebooks";
import Blog from "./pages/Blog";
import NotebookAcerNitro from "./pages/products/NotebookAcerNitro";
import AcerIndex from "./pages/brands/AcerIndex";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/consoles" element={<Consoles />} />
          <Route path="/acessorios" element={<Accessories />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/monitores" element={<Home />} />
          <Route path="/setup" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/produto/notebook-acer-nitro-anv15" element={<NotebookAcerNitro />} />
          <Route path="/marcas/acer" element={<AcerIndex />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/privacidade" element={<Privacy />} />
          <Route path="/termos" element={<Terms />} />
          <Route path="/transparencia" element={<Transparency />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
