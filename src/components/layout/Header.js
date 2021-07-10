export const Header = () => {
  return (
    <div className="header" data-testid="header">
        <nav>
            <div className="logo">
                <img src="/images/logo.png" alt="Todoist-logo"></img>
            </div>
            <div className="settings">
                <ul>
                    <li>+</li>
                    <li>Pizza Slice!</li>
                </ul>
            </div>
        </nav>
    </div>
  );
};
