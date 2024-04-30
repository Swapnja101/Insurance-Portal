// PlanForm.js
/*import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanForm = ({ plan, onClose, isEditMode }) => {
  const [planData, setPlanData] = useState({
    title: "",
    description: "",
    content1: "",
  });

  useEffect(() => {
    if (plan) {
      setPlanData(plan);
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update existing plan
      axios
        .put(`http://localhost:5000/plans/${planData.id}`, planData)
        .then(() => {
          onClose();
        })
        .catch((error) => {
          console.error("Error updating plan:", error);
        });
    } else {
      // Add new plan
      axios
        .post("http://localhost:5000/plans/create", planData)
        .then((response) => {
          // Handle success
          console.log("Plan created:", response.data);
          onClose(); // Close the form
        })
        .catch((error) => {
          console.error("Error creating plan:", error);
        });
       
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isEditMode ? "Edit Plan" : "Add Plan"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Title:</label>
            <input
              type="text"
              name="title"
              value={planData.title}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Image :</label>
            <textarea
              name="description"
              value={planData.img}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Content 1:</label>
            <textarea
              name="content1"
              value={planData.content1}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
              required // Ensure it's required if it's marked as required in the backend
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanForm;
*/
/*
import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanForm = ({ plan, onClose, isEditMode }) => {
  const [planData, setPlanData] = useState({
    title: "",
    description: "",
    img: "",
    // Ensure you include all necessary fields
  });

  useEffect(() => {
    if (plan) {
      setPlanData(plan);
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add validation for planData here if needed

    const endpoint = isEditMode ? `http://localhost:5000/plans/${planData.id}` : "http://localhost:5000/plans/create";
    const method = isEditMode ? axios.put : axios.post;

    method(endpoint, planData)
      .then((response) => {
        console.log(isEditMode ? "Plan updated:" : "Plan created:", response.data);
        onClose(); // Close the form
      })
      .catch((error) => {
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something else caused the error
          console.error("Error message:", error.message);
        }
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isEditMode ? "Edit Plan" : "Add Plan"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Image URL:</label>
            <input
              type="text"
              name="img"
              value={planData.img}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Title:</label>
            <input
              type="text"
              name="title"
              value={planData.title}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Description:</label>
            <textarea
              name="description"
              value={planData.description}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlanForm;
*/

import React, { useState, useEffect } from "react";
import axios from "axios";

const PlanForm = ({ plan, onClose, isEditMode }) => {
  const [planData, setPlanData] = useState({
    title: "",
    img: "",
    content1: "",
    content2: "",
    content3: ""
  });

  useEffect(() => {
    if (plan) {
      setPlanData(plan);
    }
  }, [plan]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlanData({
      ...planData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      // Update existing plan
      axios
        .put(`http://localhost:5000/plans/${planData._id}`, planData)
        .then(() => {
          onClose();
        })
        .catch((error) => {
          console.error("Error updating plan:", error);
        });
    } else {
      // Add new plan
      axios
        .post("http://localhost:5000/plans/create", planData)
        .then((response) => {
          console.log("Plan created:", response.data);
          onClose(); // Close the form
        })
        .catch((error) => {
          console.error("Error creating plan:", error);
        });
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-md grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <h2 className="text-2xl font-semibold mb-4">
            {isEditMode ? "Edit Plan" : "Add Plan"}
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600">Title:</label>
              <input
                type="text"
                name="title"
                value={planData.title}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border rounded-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600">Image URL:</label>
              <input
                type="text"
                name="img"
                value={planData.img}
                onChange={handleInputChange}
                className="w-full py-2 px-3 border rounded-lg"
                required
              />
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <div className="mb-4">
            <label className="block text-gray-600">Content 1:</label>
            <textarea
              name="content1"
              value={planData.content1}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Content 2:</label>
            <textarea
              name="content2"
              value={planData.content2}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Content 3:</label>
            <textarea
              name="content3"
              value={planData.content3}
              onChange={handleInputChange}
              className="w-full py-2 px-3 border rounded-lg"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mr-2"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-600 font-semibold py-2 px-4 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
