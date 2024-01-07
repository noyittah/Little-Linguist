import { Component } from '@angular/core';
import { WORD_CATEGORIES } from '../../constants/constants';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styleUrl: './categories-table.component.css'
})

export class CategoriesTableComponent {
  wordCategories = WORD_CATEGORIES;
  columns: string[] = ['categoryName', 'numberOfWords', 'lastModificationDate', 'action'];

  public calculateNumberOfWords(category: Category): number {
    return category.wordPairs.size;
  }

  public onDeleteCategory(category: Category): void {
    this.wordCategories = this.wordCategories.filter((c) => c.id !== category.id);
  }
}
