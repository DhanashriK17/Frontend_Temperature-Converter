import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { TemperatureConverterComponent } from './temperature-converter.component';

describe('TemperatureConverterComponent', () => {
  let component: TemperatureConverterComponent;
  let fixture: ComponentFixture<TemperatureConverterComponent>;
  let compiled: HTMLElement;
  let celsiusInput: HTMLInputElement;
  let fahrenheitInput: HTMLInputElement;

  const pushCelsiusValue = async (value: string) => {
    celsiusInput.value = value;
    celsiusInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const pushFahrenheitValue = async (value: string) => {
    fahrenheitInput.value = value;
    fahrenheitInput.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [TemperatureConverterComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureConverterComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    celsiusInput = getByTestId('celsius-input') as HTMLInputElement;
    fahrenheitInput = getByTestId('fahrenheit-input') as HTMLInputElement;
    fixture.detectChanges();
  });

  it('Typing value in Celsius field gets correct Fahrenheit value', async () => {
    await pushCelsiusValue('500');
    expect(Number(fahrenheitInput.value)).toEqual(932);
  });

  it('Typing value in Celsius field gets correct Fahrenheit value up to 1 decimal values', async () => {
    await pushCelsiusValue('32');
    expect(Number(fahrenheitInput.value)).toEqual(89.6);
  });

  it('Typing value in Fahrenheit field gets correct Celsius value', async () => {
    await pushFahrenheitValue('932');
    expect(Number(celsiusInput.value)).toEqual(500);
  });

  it('Typing value in Fahrenheit field gets correct Celsius value up to 1 decimal values', async () => {
    await pushFahrenheitValue('100');
    expect(Number(celsiusInput.value)).toEqual(37.8);
  });

  it('Perform series of actions', async () => {
    await pushFahrenheitValue('10');
    expect(Number(celsiusInput.value)).toEqual(-12.2);

    await pushCelsiusValue('10');
    expect(Number(fahrenheitInput.value)).toEqual(50);

    await pushFahrenheitValue('200');
    expect(Number(celsiusInput.value)).toEqual(93.3);

    await pushCelsiusValue('248');
    expect(Number(fahrenheitInput.value)).toEqual(478.4);
  });
});
