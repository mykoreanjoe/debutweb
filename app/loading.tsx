export default function Loading() {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-80 z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto"></div>
        <h3 className="mt-4 text-lg font-semibold text-gray-700">로딩 중...</h3>
        <p className="mt-2 text-sm text-gray-500">컨텐츠를 불러오고 있습니다. 잠시만 기다려주세요.</p>
      </div>
    </div>
  );
} 