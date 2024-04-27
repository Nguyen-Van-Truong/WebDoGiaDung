import React from 'react';

const ImageUploader = ({selectedFiles, handleFileSelect, handleRemoveFile, removeExistingFile}) => {
    return (
        <div>
            <label className="form-label">Tải lên hình ảnh sản phẩm</label>
            <small className="d-block text-muted mb-2">
                Kéo và thả hoặc nhấp để chọn hình ảnh
            </small>
            <input type="file" multiple accept="image/*" onChange={handleFileSelect}/>
            <div className="mt-2">
                <p className="mb-1">Các ảnh đã chọn:</p>
                <div className="d-flex flex-wrap">
                    {selectedFiles.map((file) => (
                        <div key={file.id} className="image-container">
                            <img
                                src={file.url || URL.createObjectURL(file.file)}
                                alt="Product"
                                style={{width: 100, height: 100, objectFit: 'cover'}}
                            />
                            <button className="btn btn-sm btn-danger mt-1"
                                    onClick={() => file.url ? removeExistingFile(file.id) : handleRemoveFile(file.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageUploader;
