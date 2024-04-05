import { Component, ElementRef, HostListener } from '@angular/core';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  backgroundColor:any;
  textColor:any;

  menuValue: boolean = false;
  menuIcon: string = 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'

  categorias: { nombre: string, subcategorias: string[] }[] = [];

  constructor(private datosService: CategoriaService,private elementRef: ElementRef){ }

  ngOnInit():void{
    this.categorias = this.datosService.obtenerCategorias();
  }

  openMenu() {
    this.menuValue = !this.menuValue;
    this.menuIcon = this.menuValue ? 'M6 18 18 6M6 6l12 12' : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5';
  }
  closeMenu(sectionId: string) {
    this.menuValue = false;
    this.menuIcon = 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5';
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string): void {
    const navbarElement = document.getElementById('navbar');
    
    if (navbarElement) {
      const navbarHeight = navbarElement.offsetHeight;
      const section = document.getElementById(sectionId);
  
      if (section) {
        const sectionTop = section.offsetTop - navbarHeight;
        window.scrollTo({ 
          top: sectionTop, 
          behavior: 'smooth' 
        });
      }
    }
  }
  


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = this.elementRef.nativeElement.querySelector('header');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}
