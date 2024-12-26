export default function Footer(){
    return (
        <footer className="footer">
            <div className="p-10 text-white bg-slate-700 table w-full ...">
              <div className="table-header-group ...">
                <div className="table-row">
                  <div className="table-cell text-left ...">@All rights registered</div>
                  <div className="table-cell text-left ...">
                      <div className="flex items-center space-x-4">
                            <a href="/" className="hover:text-gray-200">Home</a>
                            <a href="/about" className="hover:text-gray-200">About</a>
                            <a href="/dashboard" className="hover:text-gray-200">Dashboard</a>
                            <a href="/login" className="hover:text-gray-200">Login</a>
                      </div>
                  </div>
                </div>
              </div>
            </div>
        </footer>
    );
};