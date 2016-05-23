import * as gulp from 'gulp';
import { join } from 'path';


import { APP_DEST } from '../../config';

export = () => {
    let BOOTSTRAP_FONT_DIR = 'node_modules/bootstrap/dist/fonts'
    return gulp.src(join(BOOTSTRAP_FONT_DIR, '*'))
        .pipe(gulp.dest(APP_DEST))
} ;