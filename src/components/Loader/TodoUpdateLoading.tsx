const TodoUpdateLoading = () => {
    return (
        <div className="space-y-4 animate-pulse">
        {/* Name Field Skeleton */}
        <div>
          <div className="h-4 bg-gray-300 rounded w-1/5 mb-2" />
          <div className="w-full h-10 bg-gray-200 rounded-xl" />
        </div>
  
        {/* Email Field Skeleton */}
        <div>
          <div className="h-4 bg-gray-300 rounded w-1/5 mb-2" />
          <div className="w-full h-10 bg-gray-200 rounded-xl" />
        </div>
  
        {/* Submit Button Skeleton */}
        <div className="pt-4">
          <div className="w-full h-10 bg-blue-300 rounded-xl" />
        </div>
      </div>
    );
  };
  
  export default TodoUpdateLoading;
  