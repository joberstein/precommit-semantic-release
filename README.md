# precommit-semantic-release

This pre-commit hook allows semantic-release to be run from non-node projects where pre-commit is installed.

## Configuration

1. Create your `.releaserc` config file in the repo's root, as explained in [semantic-release docs][semantic-release-docs].

2. Add the following to your repo's `.pre-commit-config.yaml`, adding any required plugins as `additional_dependencies` or `args`:
    ```
    -   repo: https://github.com/joberstein/precommit-semantic-release
        rev: <latest tag>
        hooks:
            -   id: semantic-release 
                stages:
                    - manual
                additional_dependencies:
                    - @semantic-release/exec
                args: 
                    - -d
                    - --branches=test
    ```

## Installation

[Install the hook][install-precommit] in your project repo:
```
pre-commit install
```

## Run

[Run the hook][run-hook] in your CI configuration or on the command-line as a manual hook:
```
pre-commit run --hook-stage manual semantic-release
```

[semantic-release-docs]: https://semantic-release.gitbook.io/semantic-release/usage/configuration
[install-precommit]: https://pre-commit.com/#install
[run-hook]: https://pre-commit.com/#confining-hooks-to-run-at-certain-stages