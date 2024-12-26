import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { FiDatabase, FiRefreshCw } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

export const RepositoryList = () => {
  const getRepositoriesFromLocalStorage = () => {
    const storedRepos = localStorage.getItem("repositories");
    return storedRepos ? JSON.parse(storedRepos) : [];
  };

  const [repositories, setRepositories] = useState(
    getRepositoriesFromLocalStorage()
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [newRepo, setNewRepo] = useState({
    name: "",
    language: "",
    size: "",
    isPublic: true,
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("repositories", JSON.stringify(repositories));
  }, [repositories]);

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const handleViewModalToggle = (repo) => {
    setSelectedRepo(repo);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchQuery)
  );

  const handleRefresh = () => {
    setRepositories(getRepositoriesFromLocalStorage());
    window.location.reload();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRepo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !newRepo.name ||
      repositories.some((repo) => repo.name === newRepo.name)
    ) {
      alert("Invalid or duplicate repository name.");
      return;
    }

    const newRepoDetails = {
      ...newRepo,
      size: Number(newRepo.size),
      updated: "Just Now",
    };

    setRepositories((prevRepositories) => [
      ...prevRepositories,
      newRepoDetails,
    ]);

    handleModalToggle();
    setNewRepo({ name: "", language: "", size: "", isPublic: true });
  };

  return (
    <div className="lg:border lg:rounded-xl pt-24 lg:pt-6">
      <div className="block lg:flex justify-between items-start mb-3 px-4 lg:px-6">
        <div className="mb-3">
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-gray-600">
            {repositories.length} total repositories
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <button
            className="p-2 hover:bg-gray-100 border rounded-lg gap-2 flex items-center px-3 sm:px-4 py-2"
            onClick={handleRefresh}
          >
            <FiRefreshCw size={20} /> <span>Refresh All</span>
          </button>
          <button
            className="bg-green-500 border-2 border-green-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700"
            onClick={handleModalToggle}
          >
            <FaPlus size={20} />
            <span>Add Repository</span>
          </button>
        </div>
      </div>

      <div className="relative mb-6 max-w-md mx-4 lg:mx-6">
        <IoSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-600"
          size={20}
        />
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-green-500"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="lg:pb-6">
        {repositories.length > 0 ? (
          filteredRepositories.map((repo, index) => (
            <div
              key={index}
              className="border-t border-gray-200 p-4 lg:px-6 hover:bg-neutral-200 transition-colors cursor-pointer"
              onClick={() => handleViewModalToggle(repo)}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-medium text-green-600">
                    {repo.name}
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full border-2 border-green-200 bg-green-50 text-green-700`}
                  >
                    {repo.isPublic ? "Public" : "Private"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-neutral-900">
                <div className="flex items-center gap-2">
                  {repo.language}
                  <span className={`w-2 h-2 rounded-full bg-green-500`}></span>
                </div>
                <span className="flex items-center gap-1">
                  <FiDatabase size={12} />
                  {repo.size} KB
                </span>
                <span>Updated {repo.updated}</span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600 border-t pt-6 px-4">
            No repositories found. Add a new repository to get started.
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full m-3">
            <h2 className="text-2xl font-semibold mb-4">Add Repository</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="name"
                >
                  Repository Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newRepo.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="language"
                >
                  Language
                </label>
                <input
                  type="text"
                  id="language"
                  name="language"
                  value={newRepo.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor="size"
                >
                  Size
                </label>
                <input
                  type="number"
                  id="size"
                  name="size"
                  value={newRepo.size}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-green-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center text-sm font-medium mb-1">
                  <input
                    type="checkbox"
                    name="isPublic"
                    checked={newRepo.isPublic}
                    onChange={() =>
                      setNewRepo({ ...newRepo, isPublic: !newRepo.isPublic })
                    }
                    className="hidden peer"
                  />
                  <div className="w-6 h-6 border-2 border-green-500 rounded-md peer-checked:bg-green-500 flex items-center justify-center">
                    {newRepo.isPublic && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 font-semibold text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className="ml-2">Public</span>
                </label>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={handleModalToggle}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Add Repository
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedRepo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full m-3">
            <h2 className="text-2xl font-semibold mb-4">Repository Details</h2>
            <p>
              <span className="font-semibold">Repository Name:</span>{" "}
              {selectedRepo.name}
            </p>
            <p>
              <span className="font-semibold">Language:</span>{" "}
              {selectedRepo.language}
            </p>
            <p>
              <span className="font-semibold">Size:</span> {selectedRepo.size}{" "}
              KB
            </p>
            <p>
              <span className="font-semibold">Visibility:</span>{" "}
              {selectedRepo.isPublic ? "Public" : "Private"}
            </p>
            <button
              onClick={() => setSelectedRepo(null)}
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
            >
              Close
            </button>
            <button
              className="ms-3 mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              onClick={() => {
                const updatedRepos = repositories.filter(
                  (repo) => repo.name !== selectedRepo.name
                );
                setRepositories(updatedRepos);
                setSelectedRepo(null);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
