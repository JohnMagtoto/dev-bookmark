import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';
import { InjectableDependency } from './seed.config.interfaces';

export class ProjectConfig extends SeedAdvancedConfig {
  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  constructor() {
    super();
    this.APP_TITLE = 'Developer Bookmarker';
    let additional_deps: InjectableDependency[] = [
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      {src : 'bootstrap/dist/css/bootstrap.min.css', inject: true},
      {src : 'bootstrap/dist/fonts/*', inject: true}
    ];

    const seedDependencies = this.NPM_DEPENDENCIES;

    this.NPM_DEPENDENCIES = seedDependencies.concat(additional_deps);
  }
}
