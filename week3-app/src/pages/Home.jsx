import React, { useState, useEffect } from 'react';
import Profile from '../components/Profile';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const [count, setCount] = useState(0);

  // API Integration states
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Fetch API data
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts by search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-10">

      {/* 🧩 Component Testing Section */}
      <div className="space-y-4 max-w-xl mx-auto">
        <Card title="Welcome">
          <p>This is the homepage. Use this space to test components.</p>
          <div className="flex gap-2 flex-wrap mt-2">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Danger</Button>
          </div>
        </Card>
      </div>

      {/* 👤 Profile and Counter Section */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mb-4">
            Edit <code className="font-mono bg-gray-200 dark:bg-gray-700 p-1 rounded">src/pages/Home.jsx</code> and save to test HMR
          </p>

          {/* Profile Card */}
          <Profile firstName="John" lastName="Doe" age={25} />

          {/* Counter */}
          <div className="flex items-center gap-4 my-4">
            <Button variant="danger" onClick={() => setCount(count - 1)}>-</Button>
            <span className="text-xl font-bold">{count}</span>
            <Button variant="primary" onClick={() => setCount(count + 1)}>+</Button>
          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-4">
            Implement your TaskManager component under <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">/tasks</code>
          </p>
        </div>
      </div>

      {/* 🌐 API Integration Section */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Posts from API</h2>

        {/* Search */}
        <input
          type="text"
          value={searchTerm}
          onChange={e => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search posts..."
          className="mb-4 w-full px-4 py-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
        />

        {/* Loading */}
        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400">Loading posts...</p>
        ) : (
          <>
            {currentPosts.length > 0 ? (
              <ul className="space-y-4">
                {currentPosts.map(post => (
                  <li key={post.id} className="border p-4 rounded dark:border-gray-700">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">No posts found.</p>
            )}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6 flex-wrap">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => goToPage(i + 1)}
                  className={`px-3 py-1 rounded ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Home;
