import { of } from 'rxjs';
import { map } from 'rxjs/operators';

map(x => x * x)(of(7, 15, 24,40)).subscribe((v) => console.log(`Output is: ${v}`));

