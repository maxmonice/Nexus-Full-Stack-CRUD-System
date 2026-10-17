
import './App.css'


type Record = {
  id: number
  name: string
  category: string
  status: 'Active' | 'Inactive'
}

function App() {
  const records: Record[] = [
  { id: 1, name: 'Portfolio Website', category: 'Development', status: 'Active' },
  { id: 2, name: 'Bank Account System', category: 'Java', status: 'Active' },
  { id: 3, name: 'Ball Game', category: 'C#', status: 'Inactive' },
]

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">Nexus</h2>

        <nav>
          <a href="#" className="nav-link active">
            Dashboard
          </a>
          <a href="#" className="nav-link">
            Records
          </a>
          <a href="#" className="nav-link">
            Settings
          </a>
        </nav>
      </aside>

      <main className="main-content">
        <header className="header">
          <div>
            <h1>Dashboard</h1>
            <p>Manage your records in one place.</p>
          </div>

          <button type="button" className="primary-button">
            + Add Record
          </button>
        </header>
      
              <section className="records-section">
        <div className="records-heading">
          <div>
            <h2>Records</h2>
            <p>Manage and track your records.</p>
          </div>
          <span>{records.length} total</span>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Category</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {records.map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.name}</td>
                  <td>{record.category}</td>
                  <td>
                    <span className={`status ${record.status.toLowerCase()}`}>
                      {record.status}
                    </span>
                  </td>
                  <td>
                    <button type="button" className="action-button">
                      Edit
                    </button>
                    <button type="button" className="action-button delete">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      </main>
    </div>
  )
}

export default App
