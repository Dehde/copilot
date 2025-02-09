
const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Kalasar</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Making user onboarding effortless with AI-powered solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Features</a></li>
              <li><a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Pricing</a></li>
              <li><a href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              support@kalasar.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#terms" className="text-sm text-muted-foreground hover:text-foreground">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Kalasar – All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
