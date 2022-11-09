# Goal of this experiment
The goal was to see what happens to the bundle sizes of consumer applications of `instui` when `babel-plugin-lodash` plugin is used or not.

## Test the effect of adding `babel-plugin-lodash` to instui
I released a version of `@instructure/ui` to a local npm registry, which uses `babel-plugin-lodash` to transform each import of `lodash` from named to default exports:
```js
import { map } from 'lodash'
```

To:
```js
import map from 'lodash/map'
```

## Baseline

I created 2 seperate apps with `create-react-app`:
- [original](./original) -> `@instructure/ui`: "8.30."
- [with-babel-plugin](./with-babel-plugin) -> `@instructure/ui`: "8.30.1-snapshot-4441" (the version containing the changes of using babel-plugin-lodash)

### Test the effect of adding `lodash` as a dependency to our consuming application
Next I added `lodash@4` to our app to see the effect of using `lodash` on the bundle size.

I made 3 testing scenarios:
- use `lodash` with only default imports (`import clone from "lodash/clone"`)
- use `lodash` with only named imports (`import { clone } from "lodash/clone"`)
- use mixed imports of `lodash`

The effects of these can be seen in the table below:

## Results

| Scenario | bundle size (instui without `babel-plugin-lodash`) | bundle size (instui with `babel-plugin-lodash`) | Delta |
| ------------- | ------------- | ------------- |------------- |
| Baseline (no instui, no lodash) - [source](https://github.com/Brailor/test-lodash-import/commit/c530ed51454c6ae6db619c021928aa65ea8c4310) | 46.6 kB | 46.61 kB | +0.01 kB |
| Instui, no lodash - [source](https://github.com/Brailor/test-lodash-import/commit/f4b0ff305bd7d7a7b45d5ef15481de7bbb616489) |  90.96 kB | 71.65 kB | -19.31 kB |
| Lodash with default import (`import clone from "lodash/clone"`), + instui - [source](https://github.com/Brailor/test-lodash-import/commit/46022ceb628a5ebb4e64d6a649d1d71e5432f6d6) |  94.01 kB | 71.69 kB | -22.32 kB |
| Lodash with named import (`import {clone} from "lodash"`), + instui - [source](https://github.com/Brailor/test-lodash-import/commit/e99525dbf3a4eb13c690cdc9e55f07461cc5a22c) |  90.09 kB | 95.14 kB | +5.05 kB|
| Mixed Lodash import, + instui - [source](https://github.com/Brailor/test-lodash-import/commit/0136badf50ecc4f3d8a18572015b357c268593c9) | 94.03 kB | 95.18 kB | +1.15 kB |
