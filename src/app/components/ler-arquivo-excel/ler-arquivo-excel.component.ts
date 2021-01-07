import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-ler-arquivo-excel',
  templateUrl: './ler-arquivo-excel.component.html',
  styleUrls: ['./ler-arquivo-excel.component.scss']
})
export class LerArquivoExcelComponent implements OnInit {

  form: FormGroup;

  constructor(
    private service: FileService,
    public route: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      anexos: new FormControl()
    });
  }

  onSubmit() {
    let file = new FormData();
    file.append("file", this.form.controls.anexos.value.files[0])
    this.service.sendFile(file).subscribe(res => {
      this.success(res);
    });
  }

  success(response) {
    console.log(response);
    this.route.navigate(["/listar"]);
  }
}
