import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

export default function FileUpload() {
  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      path="public"
      maxFileCount={1}
    />
  );
}
