#if find . -type f -size +100M -print -quit | grep -q .; then
#  echo "❌ ERROR: Files over 100MB found:"
#  find . -type f -size +100M -exec ls -lh {} \;
#  exit 1
#fi

#echo "✅ No large files found. Proceeding..."

git add -A
git commit -m "small update"
git push origin main
