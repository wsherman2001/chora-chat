// src/Layout.jsx
import React from "react";

const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Levý panel: Kanály */}
      <aside
        style={{
          width: "200px",
          backgroundColor: "#2f3136",
          color: "white",
          padding: "10px",
        }}
      >
        <h3>Kanály</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li># obecný</li>
          <li># memy</li>
          <li># technika</li>
        </ul>
      </aside>

      {/* Hlavní obsah: Chat */}
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            backgroundColor: "#202225",
            color: "white",
            padding: "10px",
          }}
        >
          <h1>Chora Chat</h1>
        </header>

        <section
          style={{
            flexGrow: 1,
            backgroundColor: "#36393f",
            color: "white",
            padding: "10px",
            overflowY: "auto",
          }}
        >
          <p>Sem přijde obsah chatu...</p>
        </section>

        <footer
          style={{
            padding: "10px",
            backgroundColor: "#40444b",
          }}
        >
          <input
            type="text"
            placeholder="Napiš zprávu..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "none",
              outline: "none",
            }}
          />
        </footer>
      </main>

      {/* Pravý panel: Aktivní členové */}
      <aside
        style={{
          width: "200px",
          backgroundColor: "#2f3136",
          color: "white",
          padding: "10px",
        }}
      >
        <h3>Online</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Franta</li>
          <li>Petr</li>
        </ul>
      </aside>
    </div>
  );
};

export default Layout;
