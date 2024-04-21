import GitHubButton from "react-github-btn";

export default () => {
  return (
    <GitHubButton
      href="https://github.com/chaibuilder/sdk"
      data-color-scheme="no-preference: light; light: light; dark: light;"
      data-size="large"
      data-show-count="true"
      aria-label="Star chaibuilder/sdk on GitHub"
    >
      Star
    </GitHubButton>
  );
};
