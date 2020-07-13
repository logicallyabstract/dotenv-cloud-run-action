# Dotenv Cloud Run Action

This GitHub Action uses [dotenv](https://www.npmjs.com/package/dotenv) to parse a `.env` file and output it as a comma-separated string. This allows you to use it when deploying to Cloud Run with the `--set-env-vars` flag.

## Inputs

### `path`

Path to the `.env` file. Defaults to `.env` in the repository root.

### `prefix`

The prefix to filter variables with. Defaults to `''` to allow all variables.

Example: `REACT_` to only allow variables prefixed with `REACT_`.

## Usage, Output

```yaml
steps:
  - name: Dotenv string for Cloud Run
    uses: logicallyabstract/dotenv-cloud-run-action@v1
    id: dotenv
```

After this runs, you can use the output in your workflow like:

```
${{ steps.dotenv.outputs.dotenvstring }}
```

You may also use each parsed and matched variable individually:

```
${{ steps.dotenv.outputs.TEST_VAR }}
```
