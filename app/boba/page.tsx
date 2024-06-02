'use client'
import { useState } from 'react';
import dynamic from 'next/dynamic';

const PdfViewer = dynamic(() => import('../PdfViewer'), { ssr: false });

const PdfViewerPage = () => {
    const [selectedFile, setSelectedFile] = useState('');

    const fileUrlen = '/boba/BOBA BEAU Recipes.pdf';
    const fileUrlcn = '/boba/BOBA BEAU 茶饮制作步骤中文.pdf';

    return (
        <div className="container mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold my-6 text-center">Select a PDF to View</h1>
            <div className="flex justify-center mb-6">
                <button
                    onClick={() => setSelectedFile(fileUrlen)}
                    className="bg-blue-500 text-white py-2 px-4 rounded mx-2"
                >
                    English PDF
                </button>
                <button
                    onClick={() => setSelectedFile(fileUrlcn)}
                    className="bg-blue-500 text-white py-2 px-4 rounded mx-2"
                >
                    Chinese PDF
                </button>
            </div>
            {selectedFile && <PdfViewer fileUrl={selectedFile} />}
        </div>
    );
};

export default PdfViewerPage;