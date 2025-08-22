import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Simulador de Empréstimos');
  });

  it('should display menu options', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const menuCards = compiled.querySelectorAll('.menu-card');
    expect(menuCards.length).toBe(3);
  });

  it('should navigate to cadastro-produtos', () => {
    component.navigateTo('/cadastro-produtos');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/cadastro-produtos']);
  });

  it('should navigate to listagem-produtos', () => {
    component.navigateTo('/listagem-produtos');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/listagem-produtos']);
  });

  it('should navigate to simulacao-emprestimo', () => {
    component.navigateTo('/simulacao-emprestimo');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/simulacao-emprestimo']);
  });

  it('should handle menu card clicks', () => {
    spyOn(component, 'navigateTo');
    const compiled = fixture.nativeElement as HTMLElement;
    const firstMenuCard = compiled.querySelector('.menu-card') as HTMLElement;
    
    firstMenuCard.click();
    expect(component.navigateTo).toHaveBeenCalled();
  });
});