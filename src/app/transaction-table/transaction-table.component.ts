import { Component, OnInit } from '@angular/core';
import { TransactionControllerService, TransactionCategoryControllerService, TransactionCategory, Transaction } from 'something';

@Component({
  selector: 'app-transaction-table',
  templateUrl: './transaction-table.component.html',
  styleUrls: ['./transaction-table.component.css']
})



export class TransactionTableComponent implements OnInit {
  transactions: Transaction[] = [];
  categories: TransactionCategory[] = [];
  readonly VERIFIED_STATE: Transaction.StateEnum = Transaction.StateEnum.VERIFIED;
  readonly IGNORED_STATE: Transaction.StateEnum = Transaction.StateEnum.IGNORE;

  constructor(private transactionService: TransactionControllerService, private categoryService: TransactionCategoryControllerService) { }
  ngOnInit() {
    this.transactionService.getTransactions(true).subscribe((data) => {
      console.log(data);
      this.transactions = data;
    })
    this.categoryService.getTransactionCategories().subscribe((data) => {
      console.log(data);
      this.categories = data;
      let cat: TransactionCategory = { id: null, name: "select category" };
      this.categories.unshift(cat);
    })
  }

  public updateTransaction(transaction: Transaction, category: number = null, state: Transaction.StateEnum = null) {
    let originalTransaction: Transaction = Object.assign({}, transaction);
    if (category !== null) {
      transaction.category = category;
    }
    if (state !== null) {
      transaction.state = state;
    }
    console.log("Updating from/to");
    console.log(JSON.stringify(originalTransaction));
    console.log(JSON.stringify(transaction));
    this.transactionService.updateTransaction(transaction, transaction.id).subscribe(
      (data) => {
      },
      (err) => {
        console.log(err);
        console.log("ya done fukt up a-aron");
        Object.assign(transaction, originalTransaction);
      });
    console.log("Updated");
  }

}
