import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

const PdfViewer = ({ fileUrl }) => {
	const defaultLayoutPluginInstance = defaultLayoutPlugin();

	return (
		<div className='container mx-auto px-4 py-6'>
			<h1 className='text-3xl font-bold my-6 text-center'>PDF Viewer</h1>
			<Worker
				workerUrl={`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js`}
			>
				<div
					style={{
						border: "1px solid rgba(0, 0, 0, 0.3)",
						height: "750px",
					}}
				>
					<Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
				</div>
			</Worker>
		</div>
	);
};

export default PdfViewer;
