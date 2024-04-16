import React from 'react';

const ImageUploader = ({ selectedFiles, handleFileSelect, handleRemoveFile }) => {
    return (
        <div>
            <label className="form-label">Tải lên hình ảnh sản phẩm</label>
            <small className="d-block text-muted mb-2">
                Kéo và thả hoặc nhấn để chọn ảnh
            </small>
            <input type="file" multiple accept="image/*" onChange={handleFileSelect} />
            <div className="mt-2">
                <p className="mb-1">Các bức ảnh đã chọn:</p>
                <div className="d-flex flex-wrap">
                    {selectedFiles.map(({file, id}) => (
                        <div key={id} className="m-1">
                            <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                style={{
                                    width: '100px',
                                    height: '100px',
                                    objectFit: 'cover'
                                }}
                            />
                            <button
                                className="btn btn-sm btn-danger mt-1"
                                onClick={() => handleRemoveFile(id)}
                            >
                                Xóa
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ImageUploader;
