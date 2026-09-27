const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "black",
        width: "100%",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px 40px",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Project Next</h2>
        </div>

        <nav>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            <li>Home</li>
            <li>Contacts</li>
            <li> Dashboards</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
