import { Category } from '../models/category.model';
import { Language } from '../enums/language.enum';

export const WORD_CATEGORIES: Category[] = [
  new Category('Colors', 1, new Date(), Language.English, Language.Hebrew, new Map([
      ['blue', 'כחול'],
      ['red', 'אדום'],
      ['green', 'ירוק'],
    ])
  ),
  new Category('Animals', 2, new Date(), Language.English, Language.Hebrew, new Map([
    ['cat', 'חתול'],
    ['dog', 'כלב'],
    ['fish', 'דג'],
  ])
  ),
  new Category('Numbers', 3, new Date(), Language.English, Language.Hebrew, new Map([
    ['one', 'אחד'],
    ['two', 'שתיים'],
    ['three', 'שלוש'],
   ])
  ),
];
