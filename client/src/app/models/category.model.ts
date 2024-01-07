import { Language } from '../enums/language.enum';

export class Category {
  categoryName: string;
  id: number;
  lastModificationDate: Date;
  sourceLanguage: Language;
  targetLanguage: Language;
  wordPairs: Map<string, string>;

  constructor(
    categoryName: string,
    id: number,
    lastModificationDate: Date,
    sourceLanguage: Language,
    targetLanguage: Language,
    wordPairs: Map<string, string>
  ) {
    this.categoryName = categoryName;
    this.id = id;
    this.lastModificationDate = lastModificationDate;
    this.sourceLanguage = sourceLanguage;
    this.targetLanguage = targetLanguage;
    this.wordPairs = wordPairs;
  }
}
