# If you have a database that you need to keep - DON'T RUN THIS SCRIPT
find . -type d -name "node_modules" -prune -exec rm -rf '{}' +
find . -type f -name "package-lock.json" -prune -exec rm '{}' +
find . -type f -name "*.db" -prune -exec rm '{}' +
