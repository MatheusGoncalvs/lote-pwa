import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ErrorMessageComponent } from 'src/app/helpers/error-message/error-message.component';
import { LoteTrackerError } from 'src/app/Models/LoteTrackerError';
import { FileService } from 'src/app/services/file.service';

@Component({
  selector: 'app-ler-arquivo-excel',
  templateUrl: './ler-arquivo-excel.component.html',
  styleUrls: ['./ler-arquivo-excel.component.css']
})
export class LerArquivoExcelComponent implements OnInit {

  form: FormGroup;

  erros;

  constructor(
    private service: FileService,
    public route: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      anexos: new FormControl()
    });
  }

  onSubmit() {
    let file = new FormData();
    file.append("file", this.form.controls.anexos.value.files[0])

    this.service.sendFile(file)
      .subscribe(
        (res) => this.success(res),
        (error: LoteTrackerError) => this.errorMessage(error)
      );
  }

  success(response) {
    console.log(response);
    this.route.navigate(["/listar"]);
  }

  errorMessage(error: LoteTrackerError) {
    this.erros = error.message.errors['Messages'];

    this.dialog.open(ErrorMessageComponent, { data: { erros: this.erros } });
  }
}