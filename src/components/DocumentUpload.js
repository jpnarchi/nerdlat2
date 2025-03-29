import React, { useState } from 'react';

const DocumentUpload = ({ onDocumentsUpload }) => {
  const [documents, setDocuments] = useState([]);

  const handleFileChange = (event) => {
    const newFiles = Array.from(event.target.files);
    setDocuments(prev => [...prev, ...newFiles]);
  };

  const removeDocument = (index) => {
    setDocuments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">
        Sube tus Documentos Legales
      </h2>
      <div className="border-dashed border-2 border-gray-300 p-8 text-center">
        <input 
          type="file" 
          multiple 
          onChange={handleFileChange}
          className="hidden" 
          id="file-upload"
        />
        <label 
          htmlFor="file-upload" 
          className="cursor-pointer bg-blue-500 text-white px-6 py-3 rounded-full 
          hover:bg-blue-600 transition duration-300"
        >
          Seleccionar Documentos
        </label>
        <p className="mt-4 text-gray-600">
          Formatos permitidos: PDF, DOCX, JPG
        </p>
      </div>
      {documents.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">Documentos Seleccionados</h3>
          {documents.map((file, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2"
            >
              <span>{file.name}</span>
              <button 
                onClick={() => removeDocument(index)}
                className="text-red-500 hover:text-red-700"
              >
                Eliminar
              </button>
            </div>
          ))}
          <button 
            onClick={() => onDocumentsUpload(documents)}
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded 
            hover:bg-green-600 transition duration-300"
          >
            Continuar con Documentos
          </button>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;