import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html',
  styleUrls: ['./temperature-converter.component.css']
})
export class TemperatureConverterComponent implements OnInit{

  c = "";
  f = "";
  constructor() {}

  ngOnInit() {}

  handleChange(val: string | null, type: "c" | "f") {
    if (val === null) {
      this.c = "";
      this.f = "";
      return;
    }

    const temp = Number(val);
    if (type === "c") {
      this.f = ((temp * 9) / 5 + 32).toFixed(1);
    } else {
      this.c = (((temp - 32) * 5) / 9).toFixed(1);
    }
  }
}
