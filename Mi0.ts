import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

interface Snippet {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  newSnippet: string = '';
  newSnippetTitle: string = '';
  snippets: Snippet[] = [];
  selectedSnippet: Snippet | null = null;

  private storageReady = false;

  constructor(private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.storageReady = true;
    this.loadSnippets();
  }

  async loadSnippets() {
    const storedSnippets = await this.storage.get('codeSnippets');
    if (storedSnippets) {
      this.snippets = storedSnippets;
    }
  }

  async saveSnippet() {
    if (!this.newSnippetTitle.trim() || !this.newSnippet.trim()) {
      alert('Please add a title and some code!');
      return;
    }

    const snippet: Snippet = {
      id: Date.now(),
      title: this.newSnippetTitle.trim(),
      content: this.newSnippet.trim(),
    };

    this.snippets.push(snippet);
    await this.storage.set('codeSnippets', this.snippets);

    this.newSnippet = '';
    this.newSnippetTitle = '';
  }

  selectSnippet(snippet: Snippet) {
    this.selectedSnippet = snippet;
  }
}
