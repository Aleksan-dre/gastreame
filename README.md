# Git Working Rules for GamStreame

## General Guidelines
1. **No direct modifications to `master` branch**: All changes must be made in feature or bugfix branches.
2. **Branching strategy**:
   - Every change must be developed in a separate branch.
   - Branches should follow the naming convention outlined below.
3. **Keep commits atomic**:
   - Write meaningful commit messages.
   - Avoid committing unrelated changes in a single commit.
   - e.g "add routing", "fix layout issues", always use the imperative form
## Branch Naming Conventions
### Feature Branches
- When adding a new feature, create a branch in the `feature/` folder with the following format:
  ```
  feature/GME-[number]_[short-description]
  ```
- Example:
  ```
  feature/GME-101_adjust_design
  ```
- If no specific label is required, you can use:
  ```
  feature/GME-101
  ```

### Bugfix Branches
- When fixing a bug, create a branch in the `bugfix/` folder with the following format:
  ```
  bugfix/GME-[number]_[short-description]
  ```
- Example:
  ```
  bugfix/GME-102_fix_layout
  ```
- If no specific label is required, you can use:
  ```
  bugfix/GME-102
  ```

## Steps for Working on a New Task
1. **Pull the latest changes from `master`**:
   ```sh
   git checkout master
   git pull origin master
   ```
2. **Create a new branch**:
   ```sh
   git checkout -b feature/GME-103_new_functionality
   ```
3. **Work on the feature or bugfix**:
   - Use Visual Studio Code as the development environment.
   - Keep commits focused and meaningful.
4. **Push changes to the repository**:
   ```sh
   git add .
   git commit -m "Implemented new feature"
   git push origin feature/GME-103_new_functionality
   ```
5. **Merge after approval**:
   - Once approved, the branch can be merged into `master`.
   - Delete the branch after merging.

## Additional Notes
- Always keep your branch **up to date** with `master` by regularly pulling changes.
- If conflicts arise during merging, resolve them before pushing.
- Use descriptive branch names that clearly state the purpose of the change.

Following these rules ensures a clean and structured development workflow for GamStreame. 🚀

To start the project write: 
```sh
   npm run dev
   ```
